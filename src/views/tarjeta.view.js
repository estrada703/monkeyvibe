import { html } from '../core/dom.js';
import { sectionHead } from './sectionHead.js';
import { stepsGrid } from './steps.view.js';

export const tarjetaView = (t) => html`
<section id="tarjeta">
  ${sectionHead(t.tarjeta)}
  ${stepsGrid(t.tarjeta.steps)}
  <p class="aviso">${t.tarjeta.warn}</p>
</section>`;
