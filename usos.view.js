import { html } from '../core/dom.js';
import { icon } from './icons.js';
import { sectionHead } from './sectionHead.js';

export const usosView = (t) => html`
<section id="usos">
  ${sectionHead(t.usos)}
  <div class="usos">
    ${t.usos.items.map((u) => html`
    <article class="uso${u.green ? ' verde' : ''}">
      <div class="top">${icon(u.icon)}<span class="chip ${u.kind}">${u.chip}</span></div>
      <h3>${u.title}</h3>
      <p>${u.text}</p>
      <p class="ej">${u.ej}</p>
    </article>`)}
  </div>
  <p class="aviso">${t.usos.note}</p>
</section>`;
