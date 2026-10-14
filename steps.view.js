import { html, rich } from '../core/dom.js';
/** Rejilla de pasos numerados reutilizada por "Cómo conseguirla" y "Tarjeta". */
export const stepsGrid = (steps) => html`
  <div class="como">
    ${steps.map(([title, body], i) => html`<div class="step"><span class="n">${i + 1}</span><h3>${title}</h3><p>${rich(body)}</p></div>`)}
  </div>`;
