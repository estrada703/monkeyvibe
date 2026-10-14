/** Consulta la blockchain (token + wallets públicas) y actualiza la sección Transparencia. */
import { CONFIG } from '../config.js';
import { WALLETS } from '../data/transparency.js';
import { fetchMintInfo, fetchWallet, isAddress } from '../models/chain.model.js';
import { updateTransparencia } from '../views/transparencia.view.js';
import { dict } from '../core/i18n.js';

export function startTransparency(store) {
  async function tick() {
    const prev = store.get().chain;
    let chain;
    try {
      const mint = await fetchMintInfo();
      const wallets = {};
      for (const w of WALLETS.filter((v) => isAddress(v.address))) {
        try { wallets[w.id] = await fetchWallet(w.address); } catch { if (prev?.wallets?.[w.id]) wallets[w.id] = prev.wallets[w.id]; }
      }
      chain = { status: 'ok', mint, wallets, at: Date.now() };
    } catch {
      chain = { ...(prev || {}), status: 'error' };
    }
    store.set({ chain });
    const { lang } = store.get();
    updateTransparencia(chain, dict(lang), lang);
  }
  tick();
  setInterval(() => { if (!document.hidden) tick(); }, CONFIG.chainRefreshMs);
}
