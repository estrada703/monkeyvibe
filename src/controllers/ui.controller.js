/**
 * Interacciones por delegación de eventos (sobreviven a cada re-render):
 * menú móvil, cambio de idioma y botones de copiar.
 */
async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; } catch { return false; }
}

export function bindUI(app, store) {
  const closeMenu = () => {
    const nav = document.querySelector('.nav');
    nav?.classList.remove('open');
    nav?.querySelector('[data-action="toggle-menu"]')?.setAttribute('aria-expanded', 'false');
  };

  document.addEventListener('click', async (e) => {
    const el = e.target.closest('[data-action], .navlinks a');
    if (!el) { if (!e.target.closest('.nav')) closeMenu(); return; }

    if (el.matches('.navlinks a')) { closeMenu(); return; }

    const action = el.dataset.action;
    if (action === 'toggle-menu') {
      const nav = el.closest('.nav');
      const open = nav.classList.toggle('open');
      el.setAttribute('aria-expanded', String(open));
    } else if (action === 'toggle-lang') {
      app.setLang(store.get().lang === 'en' ? 'es' : 'en');
    } else if (action === 'copy') {
      const ok = await copyText(el.dataset.copy || '');
      const original = el.textContent;
      if (ok) {
        el.textContent = el.dataset.done || '✓';
        setTimeout(() => { if (el.isConnected) el.textContent = original; }, 2000);
      } else {
        // Respaldo: seleccionar el texto para copiarlo a mano.
        const code = document.getElementById('ca');
        if (code) { const r = document.createRange(); r.selectNodeContents(code); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
      }
    }
  });

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
}
