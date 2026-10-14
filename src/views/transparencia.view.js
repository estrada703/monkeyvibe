import { html, link, $, $$ } from '../core/dom.js';
import { CONFIG } from '../config.js';
import { WALLETS, DONATIONS } from '../data/transparency.js';
import { isAddress, isSignature } from '../models/chain.model.js';
import { sectionHead } from './sectionHead.js';
import { clock } from '../core/format.js';

const short = (a) => `${a.slice(0, 4)}…${a.slice(-4)}`;
const nf = (lang, max = 2) => new Intl.NumberFormat(lang === 'en' ? 'en-US' : 'es-CR', { maximumFractionDigits: max });

export const transparenciaView = (t, lang) => {
  const x = t.transparencia;
  return html`
<section id="transparencia">
  ${sectionHead(x)}
  <div class="tp-block">
    <div class="tp-headrow">
      <h3>${x.checksTitle}</h3>
      <p class="eyebrow" id="tp-status">${x.checking}</p>
    </div>
    <div class="tp-checks">
      <div class="tp-check" id="tp-mint" data-state="loading"><span class="tp-ico" aria-hidden="true"></span><div><span class="eyebrow">${x.checks.mint.label}</span><b>—</b></div></div>
      <div class="tp-check" id="tp-freeze" data-state="loading"><span class="tp-ico" aria-hidden="true"></span><div><span class="eyebrow">${x.checks.freeze.label}</span><b>—</b></div></div>
      <div class="tp-check" id="tp-supply" data-state="loading"><span class="tp-ico" aria-hidden="true"></span><div><span class="eyebrow">${x.checks.supply.label}</span><b>—</b></div></div>
    </div>
    <p class="tp-link">${link(CONFIG.links.solscanToken, x.viewToken)}</p>
  </div>

  <div class="tp-block">
    <h3>${x.walletsTitle}</h3>
    <p class="tp-intro">${x.walletsIntro}</p>
    <div class="tp-wallets">
      ${WALLETS.map((w) => {
        const ok = isAddress(w.address);
        return html`
      <article class="tp-wallet${w.role === 'fund' ? ' fund' : ''}" data-wallet="${w.id}">
        <p class="eyebrow">${x.roles[w.id] || w.id}</p>
        ${ok ? html`
        <div class="tp-addr"><code title="${w.address}">${short(w.address)}</code>
          <button class="btn sm" type="button" data-action="copy" data-copy="${w.address}" data-done="${x.copied}">${x.copy}</button></div>
        <dl class="tp-bal">
          <div><dt>${x.mvibeLabel}</dt><dd data-f="mvibe">—</dd></div>
          <div><dt>${x.shareLabel}</dt><dd data-f="share">—</dd></div>
          <div><dt>${x.solLabel}</dt><dd data-f="sol">—</dd></div>
        </dl>
        ${link(CONFIG.links.solscanAccount(w.address), x.view, 'tp-view')}` : html`<p class="tp-pending">${x.pending}</p>`}
      </article>`;
      })}
    </div>
    ${WALLETS.some((w) => w.role === 'team') ? html`<p class="tp-team" id="tp-team">${x.teamSharePending}</p>` : ''}
  </div>

  <div class="tp-block">
    <h3>${x.donationsTitle}</h3>
    ${DONATIONS.length ? html`
    <div class="tp-table-wrap"><table class="tp-table">
      <thead><tr>${x.cols.map((c) => html`<th scope="col">${c}</th>`)}</tr></thead>
      <tbody>${DONATIONS.map((d) => html`<tr>
        <td>${d.date}</td><td>${d.org}</td><td>$${nf(lang).format(Number(d.amountUsd) || 0)}</td>
        <td>${isSignature(d.tx) ? link(CONFIG.links.solscanTx(d.tx), x.txLink) : '—'}</td></tr>`)}</tbody>
    </table></div>` : html`<p class="tp-empty">${x.donationsEmpty}</p>`}
  </div>
</section>`;
};

/** Pinta los datos de la blockchain con textContent (sin HTML externo). */
export function updateTransparencia(chain, t, lang) {
  const x = t.transparencia;
  const status = $('#tp-status');
  if (!status || !chain) return;
  if (chain.status === 'error' && !chain.mint) { status.textContent = x.chainError; return; }
  const n0 = nf(lang, 0); const n2 = nf(lang, 2);

  if (chain.mint) {
    const set = (id, ok, text) => { const el = $(id); el.dataset.state = ok ? 'ok' : 'bad'; el.querySelector('b').textContent = text; };
    set('#tp-mint', chain.mint.mintAuthority === null, chain.mint.mintAuthority === null ? x.checks.mint.ok : x.checks.mint.bad);
    set('#tp-freeze', chain.mint.freezeAuthority === null, chain.mint.freezeAuthority === null ? x.checks.freeze.ok : x.checks.freeze.bad);
    const sup = $('#tp-supply'); sup.dataset.state = 'info';
    sup.querySelector('b').textContent = chain.mint.supply == null ? '—' : `${n0.format(chain.mint.supply)} MVIBE`;
  }
  status.textContent = chain.status === 'error' ? x.chainError : `${x.checkedAt} ${clock(lang)}`;

  const supply = chain.mint?.supply;
  let team = 0; let teamKnown = 0;
  $$('[data-wallet]').forEach((card) => {
    const w = WALLETS.find((v) => v.id === card.dataset.wallet);
    const data = chain.wallets?.[card.dataset.wallet];
    if (!w || !data) return;
    const q = (f) => card.querySelector(`[data-f="${f}"]`);
    if (q('mvibe')) q('mvibe').textContent = n0.format(data.mvibe);
    if (q('sol')) q('sol').textContent = data.sol == null ? '—' : n2.format(data.sol);
    if (q('share')) q('share').textContent = supply ? `${(data.mvibe / supply * 100).toFixed(2)}%` : '—';
    if (w.role === 'team') { team += data.mvibe; teamKnown += 1; }
  });
  const teamEl = $('#tp-team');
  if (teamEl && teamKnown && supply) teamEl.textContent = `${x.teamShare} ${n0.format(team)} MVIBE (${(team / supply * 100).toFixed(2)}%).`;
}
