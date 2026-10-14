import { html, link } from '../core/dom.js';
import { CONFIG } from '../config.js';

export const heroView = (t) => html`
<header class="hero" id="top">
  <div>
    <p class="eyebrow">${t.hero.eyebrow}</p>
    <h1>${t.hero.h1a} <span class="pv">${t.hero.h1b}</span></h1>
    <p class="lead">${t.hero.lead}</p>
    <div class="cta">
      ${link('#comprar', t.hero.ctaBuy, 'btn main')}
      ${link(CONFIG.links.phantom, t.hero.ctaPhantom, 'btn')}
      ${link('#como', t.hero.ctaHow, 'btn')}
      ${link('#usos', t.hero.ctaUses, 'btn ghost')}
    </div>
    <div class="ca">
      <span>${t.hero.contract}</span>
      <code id="ca">${CONFIG.mint}</code>
      <button class="btn sm" type="button" data-action="copy" data-copy="${CONFIG.mint}" data-done="${t.hero.copied}">${t.hero.copy}</button>
      ${link(CONFIG.links.pumpfun, t.hero.viewPump, 'btn sm')}
    </div>
  </div>
  <div class="wheel" role="img" aria-label="${t.hero.wheelAria}">
    <canvas id="rueda" aria-hidden="true"></canvas>
    <div class="hub"><img src="/assets/img/logo.webp" alt="${t.hero.logoAlt}" width="640" height="640"></div>
  </div>
</header>
<div class="ficha">
  ${t.ficha.map(([k, v]) => html`<div><span class="eyebrow">${k}</span><b>${v}</b></div>`)}
</div>`;
