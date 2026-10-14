/**
 * Lectura directa de la blockchain de Solana (solo lectura, sin firmar nada).
 * Usa nodos RPC públicos con respaldo y valida cada respuesta.
 */
import { CONFIG } from '../config.js';

const B58 = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
export const isAddress = (a) => typeof a === 'string' && B58.test(a);
export const isSignature = (s) => typeof s === 'string' && /^[1-9A-HJ-NP-Za-km-z]{80,90}$/.test(s);

let rpcId = 0;
async function rpc(method, params) {
  let lastErr;
  for (const url of CONFIG.rpc) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), CONFIG.timeoutMs);
    try {
      const res = await fetch(url, {
        method: 'POST', signal: ctrl.signal, credentials: 'omit', referrerPolicy: 'no-referrer',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ jsonrpc: '2.0', id: ++rpcId, method, params }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      if (json.error) throw new Error(json.error.message || 'RPC');
      return json.result;
    } catch (e) { lastErr = e; } finally { clearTimeout(timer); }
  }
  throw lastErr || new Error('RPC no disponible');
}

/** Autoridades del token: si son null, nadie puede crear más MVIBE ni congelar wallets. */
export async function fetchMintInfo() {
  const r = await rpc('getAccountInfo', [CONFIG.mint, { encoding: 'jsonParsed', commitment: 'confirmed' }]);
  const info = r?.value?.data?.parsed?.info;
  if (!info || r.value.data.parsed.type !== 'mint') throw new Error('Respuesta inesperada');
  const decimals = Number(info.decimals);
  const supply = Number(info.supply) / 10 ** decimals;
  return {
    mintAuthority: info.mintAuthority ?? null,
    freezeAuthority: info.freezeAuthority ?? null,
    supply: Number.isFinite(supply) ? supply : null,
    decimals,
  };
}

/** Saldo de SOL y de MVIBE de una wallet pública. */
export async function fetchWallet(address) {
  if (!isAddress(address)) throw new Error('Dirección inválida');
  const [bal, tokens] = await Promise.all([
    rpc('getBalance', [address, { commitment: 'confirmed' }]),
    rpc('getTokenAccountsByOwner', [address, { mint: CONFIG.mint }, { encoding: 'jsonParsed', commitment: 'confirmed' }]),
  ]);
  const sol = Number(bal?.value) / 1e9;
  const mvibe = (Array.isArray(tokens?.value) ? tokens.value : [])
    .map((t) => Number(t?.account?.data?.parsed?.info?.tokenAmount?.uiAmount))
    .filter(Number.isFinite)
    .reduce((a, b) => a + b, 0);
  return { sol: Number.isFinite(sol) ? sol : null, mvibe };
}
