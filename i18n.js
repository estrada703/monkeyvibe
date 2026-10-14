/** Idiomas: detecta, guarda la preferencia y entrega el diccionario. */
import es from '../content/es.js';
import en from '../content/en.js';

const DICTS = Object.freeze({ es, en });
const KEY = 'mv-lang';

export function detectLang() {
  if (location.hash === '#en') return 'en';
  try {
    const saved = localStorage.getItem(KEY);
    if (saved && Object.hasOwn(DICTS, saved)) return saved;
  } catch { /* almacenamiento bloqueado: seguimos sin él */ }
  return /^es/i.test(navigator.language || 'es') ? 'es' : 'en';
}

export function saveLang(lang) {
  try { localStorage.setItem(KEY, lang); } catch { /* sin almacenamiento */ }
}

export const dict = (lang) => DICTS[lang] || es;
