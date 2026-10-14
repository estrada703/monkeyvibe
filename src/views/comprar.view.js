import { html, link } from '../core/dom.js';
import { CONFIG } from '../config.js';
import { sectionHead } from './sectionHead.js';

/** La tarjeta del widget usa un "slot": el controlador conserva el widget entre renders. */
export const comprarView = (t) => html`
<section id="comprar">
  ${sectionHead(t.comprar)}
  <div class="swapwrap">
    <ol class="swapsteps">
      ${t.comprar.steps.map(([n, title, d]) => html`<li><span class="n">${n}</span><div><b>${title}</b><span>${d}</span></div></li>`)}
    </ol>
    <div class="swapcard">
      <div id="jupiter-slot"></div>
      <div class="swapfb" id="swapfb">
        <b>${t.comprar.fbTitle}</b>
        <p>${t.comprar.fbText}</p>
        ${link(CONFIG.links.jupiter, t.comprar.fbJup, 'btn main')}
        ${link(CONFIG.links.pumpfun, t.comprar.fbPump, 'btn')}
      </div>
    </div>
  </div>
</section>`;
