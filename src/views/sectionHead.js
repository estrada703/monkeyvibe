import { html } from '../core/dom.js';
/** Encabezado común de sección (eyebrow + título + introducción). */
export const sectionHead = ({ eyebrow, title, intro }) => html`
  <div class="sec-head">
    <div><p class="eyebrow">${eyebrow}</p><h2>${title}</h2></div>
    <p>${intro}</p>
  </div>`;
