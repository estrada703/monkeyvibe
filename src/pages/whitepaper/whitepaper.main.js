/** Página /whitepaper: arma el documento en el idioma elegido (todo escapado por html``). */
import { html, rich } from '../../core/dom.js';
import { detectLang, saveLang } from '../../core/i18n.js';
import { CONFIG } from '../../config.js';
import { WP } from './whitepaper.content.js';

const root = document.getElementById('wp');

const block = (b) => {
  if (b.p) return html`<p>${rich(b.p)}</p>`;
  if (b.ul) return html`<ul>${b.ul.map((i) => html`<li>${rich(i)}</li>`)}</ul>`;
  if (b.table) return html`<dl class="wp-table">${b.table.map(([k, v]) => html`<div><dt>${k}</dt><dd>${rich(v)}</dd></div>`)}</dl>`;
  if (b.note) return html`<p class="wp-note">${rich(b.note)}</p>`;
  return '';
};

function render(lang) {
  const d = WP[lang] || WP.es;
  document.documentElement.lang = lang;
  document.title = d.meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', d.meta.description);
  root.innerHTML = html`
<nav class="wp-nav">
  <a class="brand" href="/"><img src="/assets/img/logo-face.webp" alt="" width="40" height="40">MonkeyVibe</a>
  <div class="wp-actions">
    <a class="wp-back" href="/">${d.ui.back}</a>
    <button class="btn sm" type="button" data-action="print">${d.ui.print}</button>
    <button class="lang" type="button" data-action="lang" aria-label="${d.ui.langAria}">${d.ui.lang}</button>
  </div>
</nav>
<header class="wp-hero" id="top">
  <p class="eyebrow">${d.eyebrow}</p>
  <h1>${d.title}</h1>
  <p class="wp-lead">${d.lead}</p>
  <p class="wp-meta">${d.ui.version} ${d.version} · ${d.ui.updated}: ${d.date} · <span class="wp-ca">${CONFIG.mint}</span></p>
</header>
<div class="wp-layout">
  <aside class="wp-toc" aria-label="${d.ui.toc}">
    <p class="eyebrow">${d.ui.toc}</p>
    <ol>${d.sections.map((s) => html`<li><a href="#${s.id}">${s.h}</a></li>`)}</ol>
  </aside>
  <article class="wp-doc">
    ${d.sections.map((s, i) => html`
    <section id="${s.id}">
      <h2><span class="wp-num">${String(i + 1).padStart(2, '0')}</span>${s.h}</h2>
      ${s.blocks.map(block)}
    </section>`)}
    <p class="wp-top"><a href="#top">${d.ui.top}</a></p>
  </article>
</div>`.s;
}

let lang = detectLang();
render(lang);
if (location.hash && location.hash !== '#en') document.getElementById(location.hash.slice(1))?.scrollIntoView();

document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  if (el.dataset.action === 'lang') { lang = lang === 'en' ? 'es' : 'en'; saveLang(lang); render(lang); }
  else if (el.dataset.action === 'print') window.print();
});
