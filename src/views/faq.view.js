import { html, rich, raw } from '../core/dom.js';
import { sectionHead } from './sectionHead.js';

/** Preguntas frecuentes con <details>: funcionan sin JavaScript extra y son accesibles. */
export const faqView = (t) => html`
<section id="faq">
  ${sectionHead(t.faq)}
  <div class="faq">
    ${t.faq.items.map((item, i) => html`
    <details class="faq-item" ${i === 0 ? raw('open') : ''}>
      <summary><span>${item.q}</span><span class="faq-sign" aria-hidden="true"></span></summary>
      <p>${rich(item.a)}</p>
    </details>`)}
  </div>
</section>`;

/** Datos estructurados para Google (FAQPage). Se inserta como texto JSON, nunca como HTML. */
export function updateFaqSchema(t) {
  const plain = (a) => (Array.isArray(a) ? a.map((p) => (typeof p === 'string' ? p : p.a || p.b || '')).join('') : a);
  const data = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: t.faq.items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: plain(i.a) } })),
  };
  let el = document.getElementById('faq-schema');
  if (!el) { el = document.createElement('script'); el.type = 'application/ld+json'; el.id = 'faq-schema'; document.head.appendChild(el); }
  el.textContent = JSON.stringify(data);
}
