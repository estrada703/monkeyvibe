/**
 * Controlador principal: une modelos y vistas.
 * Renderiza todas las secciones según el idioma y reconecta los componentes vivos.
 */
import { $ } from '../core/dom.js';
import { dict, saveLang } from '../core/i18n.js';
import { navView } from '../views/nav.view.js';
import { heroView } from '../views/hero.view.js';
import { comprarView } from '../views/comprar.view.js';
import { precioView, updatePrecio } from '../views/precio.view.js';
import { usosView } from '../views/usos.view.js';
import { rutaView } from '../views/ruta.view.js';
import { comoView } from '../views/como.view.js';
import { tarjetaView } from '../views/tarjeta.view.js';
import { comerciosView } from '../views/comercios.view.js';
import { nosotrosView } from '../views/nosotros.view.js';
import { footerView } from '../views/footer.view.js';
import { mountWheel } from './wheel.controller.js';
import { mountSwap } from './swap.controller.js';
import { applyChart } from './market.controller.js';

const SECTIONS = [navView, heroView, comprarView, precioView, usosView, rutaView, comoView, tarjetaView, comerciosView, nosotrosView, footerView];

export function createApp(root, store) {
  function render() {
    const { lang, market } = store.get();
    const t = dict(lang);
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    $('meta[name="description"]')?.setAttribute('content', t.meta.description);
    // Todas las vistas escapan sus datos (ver core/dom.js), por eso es seguro usar innerHTML.
    root.innerHTML = SECTIONS.map((view) => view(t).s).join('');
    mountWheel($('#rueda'));
    mountSwap($('#jupiter-slot'));
    updatePrecio(market, t, lang);
    applyChart(market);
  }


  return {
    render,
    setLang(lang) {
      if (lang === store.get().lang) return;
      saveLang(lang);
      store.set({ lang });
      render();
    },
  };
}
