/**
 * Modelo de mercado: consulta DexScreener y VALIDA cada dato antes de usarlo.
 * Nunca confiamos en la forma de una respuesta externa.
 */
import { CONFIG } from '../config.js';
import { getJSON } from '../core/http.js';

const B58 = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
const positive = (v) => { const n = Number(v); return Number.isFinite(n) && n >= 0 ? n : null; };
const finite = (v) => { const n = Number(v); return Number.isFinite(n) ? n : null; };

export async function fetchMarket() {
  const data = await getJSON(CONFIG.api.market, { timeout: CONFIG.timeoutMs });
  const pairs = (Array.isArray(data?.pairs) ? data.pairs : [])
    .filter((p) => p && p.chainId === 'solana' && p.baseToken?.address === CONFIG.mint);
  if (!pairs.length) return { status: 'empty' };

  pairs.sort((a, b) => (positive(b.liquidity?.usd) ?? 0) - (positive(a.liquidity?.usd) ?? 0)
    || (positive(b.volume?.h24) ?? 0) - (positive(a.volume?.h24) ?? 0));
  const p = pairs[0];
  return {
    status: 'ok',
    price: positive(p.priceUsd),
    change: finite(p.priceChange?.h24),
    mcap: positive(p.marketCap ?? p.fdv),
    volume: positive(p.volume?.h24),
    pair: typeof p.pairAddress === 'string' && B58.test(p.pairAddress) ? p.pairAddress : null,
    at: Date.now(),
  };
}
