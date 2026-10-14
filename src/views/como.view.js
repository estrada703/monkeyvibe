import { html, link, rich } from '../core/dom.js';
import { CONFIG } from '../config.js';
import { sectionHead } from './sectionHead.js';
import { stepsGrid } from './steps.view.js';

export const comoView = (t) => {
  const b = t.como.buy;
  return html`
<section id="como">
  ${sectionHead(t.como)}
  ${stepsGrid(t.como.steps)}
  <div class="buybox">
    <div class="buy-txt">
      <p class="eyebrow">${b.eyebrow}</p>
      <h3>${b.title}</h3>
      <p>${b.text}</p>
      <div class="cta">
        ${link(CONFIG.links.phantom, b.open, 'btn main')}
        <button class="btn" type="button" data-action="copy" data-copy="${CONFIG.mint}" data-done="${b.copied}">${b.copy}</button>
        ${link(CONFIG.links.binanceWallet, b.binance, 'btn')}
        <a class="btn" href="/assets/img/qr-phantom.png" download="qr-monkeyvibe.png">${b.download}</a>
      </div>
      <p class="binote">${rich(b.note)}</p>
    </div>
    <img class="qr-img" src="/assets/img/qr-phantom.png" alt="${b.qrAlt}" width="240" height="240" loading="lazy">
  </div>
  <p class="aviso">${t.como.warn}</p>
</section>`;
};
