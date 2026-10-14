import { html } from '../core/dom.js';
import { sectionHead } from './sectionHead.js';

export const rutaView = (t) => html`
<section id="ruta">
  ${sectionHead(t.ruta)}
  <div class="ruta">
    ${t.ruta.steps.map((s) => html`
    <div class="paso${s.now ? ' now' : ''}">
      <div class="when">${s.when}</div>
      <div class="dot"><span></span></div>
      <div><h3>${s.title}</h3><ul>${s.items.map((i) => html`<li>${i}</li>`)}</ul></div>
    </div>`)}
  </div>
</section>`;
