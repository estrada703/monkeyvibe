import { html, link, $ } from '../core/dom.js';
import { CONFIG } from '../config.js';
import { money, pct, clock } from '../core/format.js';

const IDS = ['lv-price', 'lv-chg', 'lv-mc', 'lv-vol'];

export const precioView = (t) => html`
<section class="live" id="precio">
  <div class="live-head">
    <div><p class="eyebrow"><span class="dot-live"></span>${t.precio.live}</p><h2>${t.precio.title}</h2></div>
    <p class="eyebrow" id="lv-upd">${t.precio.loading}</p>
  </div>
  <div class="live-grid">
    ${t.precio.labels.map((label, i) => html`<div><span class="eyebrow">${label}</span><b id="${IDS[i]}">—</b></div>`)}
  </div>
  <div class="chart"><iframe id="lv-chart" title="${t.precio.chartTitle}" loading="lazy" referrerpolicy="no-referrer"
    sandbox="allow-scripts allow-same-origin allow-popups" src="${CONFIG.links.dexEmbed(CONFIG.mint)}"></iframe></div>
  <p class="live-note">${t.precio.note}${link(CONFIG.links.dexscreener, t.precio.source)}.</p>
</section>`;

/** Actualiza solo los números (textContent: nunca se inyecta HTML de la API). */
export function updatePrecio(market, t, lang) {
  const upd = $('#lv-upd');
  if (!upd) return;
  if (!market) return;
  if (market.status === 'error') { upd.textContent = t.precio.error; return; }
  if (market.status === 'empty') { upd.textContent = t.precio.empty; return; }
  $('#lv-price').textContent = money(market.price);
  const chg = $('#lv-chg');
  chg.textContent = pct(market.change);
  chg.className = market.change == null ? '' : market.change >= 0 ? 'up' : 'down';
  $('#lv-mc').textContent = money(market.mcap);
  $('#lv-vol').textContent = money(market.volume);
  upd.textContent = `${t.precio.updated} ${clock(lang)}`;
}
