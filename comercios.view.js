import { html, link, rich } from '../core/dom.js';
import { CONFIG } from '../config.js';

export const comerciosView = (t) => {
  const c = t.comercios;
  return html`
<section id="comercios">
  <div class="comercio">
    <div>
      <p class="eyebrow on-dark">${c.eyebrow}</p>
      <h2>${c.title}</h2>
      <p>${rich(c.text)}</p>
      <div class="cta">${link(CONFIG.links.cobrar, c.cta, 'btn gold')}</div>
    </div>
    <div class="qr" role="group" aria-label="${c.receipt.aria}">
      <div class="eyebrow">${c.receipt.title}</div>
      ${c.receipt.rows.map(([a, b]) => html`<div class="row"><span>${a}</span><span>${b}</span></div>`)}
      <div class="row"><span>${c.receipt.total[0]}</span><span class="tot">${c.receipt.total[1]}</span></div>
      <small>${c.receipt.note}</small>
    </div>
  </div>
</section>`;
};
