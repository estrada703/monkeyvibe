/**
 * Punto de entrada de monkeyvibecr.com
 * Arquitectura: content (textos) → models (datos externos) → views (HTML) ← controllers (lógica).
 */
import { createStore } from './core/store.js';
import { detectLang } from './core/i18n.js';
import { createApp } from './controllers/app.controller.js';
import { bindUI } from './controllers/ui.controller.js';
import { startMarket } from './controllers/market.controller.js';
import { startTransparency } from './controllers/transparency.controller.js';

const root = document.getElementById('app');
const store = createStore({ lang: detectLang(), market: null, chain: null });
const app = createApp(root, store);

app.render();
bindUI(app, store);
startMarket(store);
startTransparency(store);
