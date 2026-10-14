import { html, link } from '../core/dom.js';
import { CONFIG } from '../config.js';
import { canopy } from './illustrations.js';

export const footerView = (t) => html`
${canopy({ monkey: false, flush: true })}
<footer class="footer">
  <div><strong>${t.footer.name}</strong><br>${t.footer.made}<br>
    <span class="foot-mail">${t.footer.contact} ${link(`mailto:${CONFIG.email}`, CONFIG.email)}</span></div>
  <div>${t.footer.legal}</div>
  <div class="credit">${t.footer.credit} ${link(CONFIG.links.credit, 'cloudmonkeycr.com')} · 2026</div>
</footer>`;
