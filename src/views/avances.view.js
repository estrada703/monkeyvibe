import { html, link, raw } from '../core/dom.js';
import { sectionHead } from './sectionHead.js';
import { AVANCES } from '../data/avances.js';

const ICON = {
  done: raw('<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>'),
  progress: raw('<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 7.5V12l3 2"/></svg>'),
  next: raw('<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>'),
};
const ORDER = ['progress', 'done', 'next'];

export const avancesView = (t, lang) => {
  const x = t.avances;
  const groups = ORDER.map((st) => [st, AVANCES.filter((a) => a.status === st)]).filter(([, l]) => l.length);
  const done = AVANCES.filter((a) => a.status === 'done').length;
  return html`
<section id="avances">
  ${sectionHead(x)}
  <p class="av-count"><b>${done}</b> ${x.countDone} · <b>${AVANCES.filter((a) => a.status === 'progress').length}</b> ${x.countProgress}</p>
  <div class="av-groups">
    ${groups.map(([st, list]) => html`
    <div class="av-group" data-status="${st}">
      <h3 class="av-gtitle"><span class="av-ico">${ICON[st]}</span>${x.status[st]}</h3>
      <ul class="av-list">
        ${list.map((a) => {
          const [title, text] = a[lang] || a.es;
          return html`
        <li class="av-item">
          <div class="av-top"><b>${title}</b>${a.date ? html`<span class="av-date">${a.date}</span>` : ''}</div>
          <p>${text}</p>
          ${a.link ? html`<p class="av-link">${link(a.link, x.see)}</p>` : ''}
        </li>`;
        })}
      </ul>
    </div>`)}
  </div>
  <p class="av-note">${x.note} ${link('/whitepaper', x.whitepaper)}</p>
</section>`;
};
