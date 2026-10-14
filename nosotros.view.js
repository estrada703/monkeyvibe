import { html, link } from '../core/dom.js';
import { CONFIG } from '../config.js';
import { icon } from './icons.js';
import { canopy, scene } from './illustrations.js';
import { sectionHead } from './sectionHead.js';

export const nosotrosView = (t) => {
  const n = t.nosotros;
  return html`
${canopy()}
<section id="nosotros">
  ${sectionHead(n)}
  <div class="story">
    <div class="story-text">
      <h3>${n.storyTitle}</h3>
      ${n.story.map((p) => html`<p>${p}</p>`)}
    </div>
    <div class="story-art">${scene(n.sceneAria)}</div>
  </div>
  <div class="mvo">
    ${n.cards.map((c) => html`<article class="mvo-card">${icon(c.icon)}<h3>${c.title}</h3><p>${c.text}</p></article>`)}
  </div>
  <div class="contacto">
    <div>
      <p class="eyebrow">${n.contact.eyebrow}</p>
      <h3>${n.contact.title}</h3>
      <p>${n.contact.text}</p>
    </div>
    <div class="mail">
      ${link(`mailto:${CONFIG.email}`, CONFIG.email, 'mailaddr')}
      <button class="btn" type="button" data-action="copy" data-copy="${CONFIG.email}" data-done="${n.contact.copied}">${n.contact.copy}</button>
    </div>
  </div>
</section>`;
};
