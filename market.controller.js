/** Consulta periódica del precio y actualización de la vista. */
import { CONFIG } from '../config.js';
import { fetchMarket } from '../models/market.model.js';
import { updatePrecio } from '../views/precio.view.js';
import { dict } from '../core/i18n.js';

let chartPair = null;

export function applyChart(market) {
  const frame = document.getElementById('lv-chart');
  if (!frame || !market?.pair) return;
  const src = CONFIG.links.dexEmbed(market.pair);
  if (frame.src !== src) frame.src = src;
  chartPair = market.pair;
}

export function startMarket(store) {
  async function tick() {
    let market;
    try { market = await fetchMarket(); } catch { market = { status: 'error' }; }
    // Si falla, conservamos el último dato bueno y solo avisamos.
    const prev = store.get().market;
    const next = market.status === 'error' && prev?.status === 'ok' ? { ...prev } : market;
    store.set({ market: next });
    const { lang } = store.get();
    updatePrecio(market.status === 'error' ? market : next, dict(lang), lang);
    if (next.pair && next.pair !== chartPair) applyChart(next);
  }
  tick();
  setInterval(() => { if (!document.hidden) tick(); }, CONFIG.refreshMs);
}
