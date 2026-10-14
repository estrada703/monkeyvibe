/**
 * Configuración central de MonkeyVibe.
 * Todo dato fijo del proyecto vive aquí: si cambia algo, se cambia en un solo lugar.
 */
const MINT = 'BJFNLeq3En4cXmsA2BSRcBU2MQGGCQnpbKNq8FaYpump';
const SITE = 'https://monkeyvibecr.com';

export const CONFIG = Object.freeze({
  mint: MINT,
  solMint: 'So11111111111111111111111111111111111111112',
  symbol: 'MVIBE',
  email: 'hello@monkeyvibecr.com',
  site: SITE,
  refreshMs: 30_000,
  timeoutMs: 8_000,
  api: Object.freeze({
    market: `https://api.dexscreener.com/latest/dex/tokens/${MINT}`,
    fx: 'https://open.er-api.com/v6/latest/USD',
  }),
  links: Object.freeze({
    pumpfun: `https://pump.fun/coin/${MINT}`,
    jupiter: `https://jup.ag/swap/SOL-${MINT}`,
    dexscreener: `https://dexscreener.com/solana/${MINT}`,
    dexEmbed: (id) => `https://dexscreener.com/solana/${id}?embed=1&theme=dark&trades=0&info=0`,
    phantom: `https://phantom.app/ul/browse/${encodeURIComponent(`https://pump.fun/coin/${MINT}`)}?ref=${encodeURIComponent(SITE)}`,
    binanceP2P: 'https://p2p.binance.com/es',
    binanceWallet: 'https://www.binance.com/es/web3wallet',
    redotpay: 'https://www.redotpay.com',
    bitget: 'https://www.bitget.com',
    credit: 'https://cloudmonkeycr.com',
    cobrar: '/cobrar',
  }),
  jupiterScript: 'https://plugin.jup.ag/plugin-v1.js',
});
