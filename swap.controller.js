/**
 * Widget de compra de Jupiter.
 * El nodo del widget se crea UNA vez y se reubica en cada render (no se pierde al cambiar de idioma).
 * Si el script externo no carga, se muestran botones de respaldo.
 */
import { CONFIG } from '../config.js';

let node = null;
let state = 'idle'; // idle | loading | ready | failed

function showFallback() {
  state = 'failed';
  document.getElementById('swapfb')?.classList.add('on');
  if (node) node.hidden = true;
}

function init() {
  try {
    window.Jupiter.init({
      displayMode: 'integrated',
      integratedTargetId: 'jupiter-plugin',
      formProps: { initialInputMint: CONFIG.solMint, initialOutputMint: CONFIG.mint, fixedMint: CONFIG.mint },
    });
    state = 'ready';
  } catch { showFallback(); }
}

function load() {
  state = 'loading';
  const s = document.createElement('script');
  s.src = CONFIG.jupiterScript;
  s.async = true;
  s.crossOrigin = 'anonymous';
  s.referrerPolicy = 'no-referrer';
  s.onload = () => {
    let tries = 0;
    const iv = setInterval(() => {
      if (window.Jupiter?.init) { clearInterval(iv); init(); }
      else if (++tries > 40) { clearInterval(iv); showFallback(); }
    }, 250);
  };
  s.onerror = showFallback;
  document.head.appendChild(s);
}

export function mountSwap(slot) {
  if (!slot) return;
  if (!node) { node = document.createElement('div'); node.id = 'jupiter-plugin'; }
  slot.replaceWith(node);
  if (state === 'failed') { showFallback(); return; }
  if (state === 'idle') load();
}
