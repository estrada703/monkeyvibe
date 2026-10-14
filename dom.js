/**
 * Utilidades de DOM seguras.
 * - html``  escapa TODO valor interpolado por defecto (previene XSS).
 * - raw()   marca markup confiable escrito por nosotros (íconos SVG, por ejemplo).
 * - rich()  arma texto con enlaces o negritas a partir de datos, siempre escapado.
 */
const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
export const escape = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ESC[c]);

class Raw { constructor(s) { this.s = s; } toString() { return this.s; } }
export const raw = (s) => new Raw(String(s));

const toHtml = (v) => {
  if (v == null || v === false) return '';
  if (v instanceof Raw) return v.s;
  if (Array.isArray(v)) return v.map(toHtml).join('');
  return escape(v);
};

export function html(strings, ...values) {
  let out = '';
  strings.forEach((s, i) => { out += s + (i < values.length ? toHtml(values[i]) : ''); });
  return raw(out);
}

const ALLOWED_PROTOCOLS = new Set(['https:', 'mailto:', 'solana:']);
/** Solo deja pasar enlaces https, mailto, solana o rutas propias. */
export function safeUrl(url) {
  if (/^#[\w-]*$/.test(url)) return url;
  try {
    const u = new URL(url, location.origin);
    if (u.origin === location.origin) return u.pathname + u.search + u.hash;
    return ALLOWED_PROTOCOLS.has(u.protocol) ? u.href : '#';
  } catch { return '#'; }
}

const isExternal = (href) => /^https:/i.test(href) && !href.startsWith(location.origin);

export function link(href, text, cls = '') {
  const url = safeUrl(href);
  const ext = isExternal(url) ? ' target="_blank" rel="noopener noreferrer"' : '';
  return raw(`<a href="${escape(url)}"${cls ? ` class="${escape(cls)}"` : ''}${ext}>${escape(text)}</a>`);
}

/** Texto enriquecido: ['texto', {a:'Binance', href:'https://…'}, {b:'negrita'}] */
export function rich(parts) {
  const list = Array.isArray(parts) ? parts : [parts];
  return raw(list.map((p) => {
    if (typeof p === 'string') return escape(p);
    if (p && p.href) return link(p.href, p.a).s;
    if (p && p.b) return `<b>${escape(p.b)}</b>`;
    return '';
  }).join(''));
}

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
