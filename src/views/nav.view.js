import { html, link } from '../core/dom.js';

export const navView = (t) => html`
<nav class="nav" aria-label="Principal">
  <a class="brand" href="#top" aria-label="${t.nav.home}">
    <img src="/assets/img/logo-face.webp" alt="" width="44" height="44">MonkeyVibe
  </a>
  <div class="navlinks" id="navlinks">
    ${t.nav.items.map(([href, label]) => link(href, label))}
  </div>
  <button class="lang" type="button" data-action="toggle-lang" aria-label="${t.nav.langAria}">${t.nav.langBtn}</button>
  <button class="burger" type="button" data-action="toggle-menu" aria-label="${t.nav.menu}" aria-controls="navlinks" aria-expanded="false"><span></span></button>
</nav>`;
