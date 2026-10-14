/** Ilustraciones de Costa Rica: copa de selva, mono colgando y escena del volcán. */
import { raw, escape } from '../core/dom.js';

const LEAVES = '<svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="canopy-leaves" aria-hidden="true" focusable="false"><path d="M0 0 H1200 V40 Q1150 90 1100 52 Q1050 100 990 58 Q940 104 880 60 Q820 110 760 62 Q700 104 640 58 Q580 112 520 60 Q460 104 400 56 Q340 108 280 58 Q220 100 160 54 Q100 104 50 56 Q20 84 0 60 Z"/></svg>';

const HANGING_MONKEY = '<svg viewBox="0 0 120 220" class="hang" aria-hidden="true" focusable="false"><path d="M60 0 Q66 40 58 70" stroke="currentColor" stroke-width="4" fill="none"/><path d="M58 70 Q40 74 44 90 Q48 102 60 96" stroke="#5a3a1c" stroke-width="7" fill="none" stroke-linecap="round"/><ellipse cx="60" cy="132" rx="20" ry="28" fill="#5a3a1c"/><path d="M46 112 Q36 90 54 86 M74 112 Q84 92 66 86" stroke="#5a3a1c" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="60" cy="170" r="17" fill="#5a3a1c"/><ellipse cx="60" cy="174" rx="11" ry="10" fill="#F2D3A6"/><circle cx="56" cy="172" r="2" fill="#1a0f08"/><circle cx="64" cy="172" r="2" fill="#1a0f08"/><path d="M56 179 Q60 182 64 179" stroke="#1a0f08" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>';

export const canopy = ({ monkey = true, flush = false } = {}) =>
  raw(`<div class="canopy${flush ? ' flush' : ''}" aria-hidden="true">${LEAVES}${monkey ? HANGING_MONKEY : ''}</div>`);

export const scene = (label) => raw(`<svg class="scene" viewBox="0 0 600 440" role="img" aria-label="${escape(label)}">
<defs><linearGradient id="mv-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F5B935"/><stop offset=".55" stop-color="#F0874C"/><stop offset="1" stop-color="#C8322A"/></linearGradient>
<linearGradient id="mv-vol" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a3f4a"/><stop offset="1" stop-color="#173029"/></linearGradient>
<clipPath id="mv-clip"><rect width="600" height="440" rx="28"/></clipPath></defs>
<g clip-path="url(#mv-clip)"><rect width="600" height="440" fill="url(#mv-sky)"/>
<circle cx="430" cy="150" r="62" fill="#FFF3D6" opacity=".9"/>
<g fill="#FFF3D6" opacity=".55"><circle cx="300" cy="78" r="14"/><circle cx="318" cy="64" r="18"/><circle cx="340" cy="56" r="13"/></g>
<path d="M150 300 L276 112 Q300 96 324 112 L460 300 Z" fill="url(#mv-vol)"/>
<path d="M276 112 Q300 100 324 112 L310 128 Q300 120 290 128 Z" fill="#C8322A" opacity=".7"/>
<path d="M0 300 Q90 250 180 284 T360 276 T600 262 V440 H0 Z" fill="#1F5F43"/>
<path d="M0 336 Q120 296 250 326 T480 314 T600 318 V440 H0 Z" fill="#17473A"/>
<g fill="#0F2E25"><rect x="58" y="150" width="16" height="290"/><rect x="520" y="140" width="16" height="300"/><circle cx="66" cy="150" r="54"/><circle cx="30" cy="180" r="38"/><circle cx="104" cy="182" r="40"/><circle cx="528" cy="140" r="56"/><circle cx="490" cy="172" r="38"/><circle cx="570" cy="176" r="42"/></g>
<path d="M74 236 Q297 300 520 230" stroke="#F5B935" stroke-width="4" fill="none"/><path d="M74 254 Q297 318 520 248" stroke="#F5B935" stroke-width="4" fill="none"/>
<g stroke="#F5B935" stroke-width="2.5"><line x1="130" y1="252" x2="130" y2="269"/><line x1="185" y1="265" x2="185" y2="282"/><line x1="240" y1="273" x2="240" y2="290"/><line x1="297" y1="276" x2="297" y2="293"/><line x1="354" y1="273" x2="354" y2="290"/><line x1="409" y1="264" x2="409" y2="281"/><line x1="464" y1="250" x2="464" y2="267"/></g>
<g transform="translate(300 222)"><path d="M-26 34 Q-60 30 -56 6 Q-52 -8 -40 0" stroke="#3b2414" stroke-width="7" fill="none" stroke-linecap="round"/><ellipse cx="-6" cy="26" rx="26" ry="18" fill="#3b2414"/><path d="M-22 38 L-28 54 M12 38 L18 54" stroke="#3b2414" stroke-width="8" stroke-linecap="round"/><circle cx="22" cy="6" r="18" fill="#3b2414"/><ellipse cx="25" cy="10" rx="11" ry="10" fill="#F2D3A6"/><circle cx="21" cy="7" r="2.2" fill="#1a0f08"/><circle cx="29" cy="7" r="2.2" fill="#1a0f08"/><path d="M21 14 Q25 17 29 14" stroke="#1a0f08" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M10 -6 L14 -16 L19 -9 L24 -18 L28 -9 L33 -15 L34 -4 Z" fill="#F5B935"/></g>
<g transform="translate(515 214)"><path d="M-26 0 H8" stroke="#0F2E25" stroke-width="6"/><ellipse cx="0" cy="-16" rx="13" ry="18" fill="#111"/><circle cx="4" cy="-32" r="9" fill="#111"/><path d="M10 -36 Q40 -38 44 -28 Q30 -24 10 -26 Z" fill="#F0874C"/><path d="M10 -36 Q30 -38 38 -33" stroke="#F5B935" stroke-width="3" fill="none"/><circle cx="6" cy="-34" r="2" fill="#5B9BE8"/><ellipse cx="2" cy="-18" rx="6" ry="8" fill="#FFF3D6"/></g>
<g fill="#0B231C"><path d="M-10 440 Q20 360 70 380 Q50 400 60 440 Z"/><path d="M30 440 Q70 340 130 360 Q100 390 110 440 Z"/><path d="M610 440 Q580 352 520 372 Q545 398 535 440 Z"/><path d="M570 440 Q520 360 470 390 Q495 410 492 440 Z"/></g></g></svg>`);
