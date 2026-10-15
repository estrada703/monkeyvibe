import { html, link } from '../core/dom.js';
import { CONFIG } from '../config.js';
import { SOCIAL } from '../data/avances.js';
import { canopy } from './illustrations.js';

const socials = () => [
  SOCIAL.x && ['X', `https://x.com/${SOCIAL.x}`],
  SOCIAL.tiktok && ['TikTok', `https://www.tiktok.com/@${SOCIAL.tiktok}`],
  SOCIAL.telegram && ['Telegram', `https://t.me/${SOCIAL.telegram}`],
].filter(Boolean);

export const footerView = (t) => {
  const soc = socials();
  return html`
${canopy({ monkey: false, flush: true })}
<footer class="footer">
  <div><strong>${t.footer.name}</strong><br>${t.footer.made}<br>
    <span class="foot-mail">${t.footer.contact} ${link(`mailto:${CONFIG.email}`, CONFIG.email)}</span>
    ${soc.length ? html`<br><span class="foot-social">${t.footer.social} ${soc.map(([n, u], i) => html`${i ? ' · ' : ''}${link(u, n)}`)}</span>` : ''}
    <br><span class="foot-links">${link('/whitepaper', t.footer.whitepaper)} · ${link('#avances', t.footer.avances)}</span></div>
  <div>${t.footer.legal}</div>
  <div class="credit">${t.footer.credit} ${link(CONFIG.links.credit, 'cloudmonkeycr.com')} · 2026</div>
</footer>`;
};
