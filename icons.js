/** Íconos SVG propios (markup confiable, sin datos de usuario). */
import { raw } from '../core/dom.js';

const I = {
  cafe: '<path d="M10 18h24v12a10 10 0 0 1-10 10h-4a10 10 0 0 1-10-10z" fill="none" stroke="var(--rojo)" stroke-width="3"/><path d="M34 22h3a5 5 0 0 1 0 10h-3" fill="none" stroke="var(--rojo)" stroke-width="3"/><path d="M17 6c-2 3 2 5 0 8M24 6c-2 3 2 5 0 8" stroke="var(--ink-soft)" stroke-width="2.4" fill="none" stroke-linecap="round"/>',
  mono: '<path d="M6 40C14 22 22 14 42 8" stroke="var(--verde)" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="28" cy="22" r="6" fill="var(--ink)"/><path d="M28 28c0 6 4 8 8 6" stroke="var(--ink)" stroke-width="3" fill="none" stroke-linecap="round"/>',
  surf: '<path d="M24 4c6 10 6 30 0 40-6-10-6-30 0-40z" fill="none" stroke="var(--azul)" stroke-width="3"/><path d="M4 38c6-4 10-4 14 0s10 4 14 0 10-4 12 0" stroke="var(--azul)" stroke-width="2.6" fill="none" stroke-linecap="round"/>',
  camisa: '<path d="M14 8l-8 6 4 8 4-2v20h20V20l4 2 4-8-8-6-5 3a5 5 0 0 1-10 0z" fill="none" stroke="var(--amarillo)" stroke-width="3" stroke-linejoin="round"/>',
  qr: '<rect x="8" y="8" width="32" height="32" rx="4" fill="none" stroke="var(--ink)" stroke-width="3"/><rect x="14" y="14" width="8" height="8" fill="var(--ink)"/><rect x="26" y="14" width="8" height="8" fill="var(--ink)"/><rect x="14" y="26" width="8" height="8" fill="var(--ink)"/><rect x="28" y="28" width="4" height="4" fill="var(--rojo)"/>',
  puente: '<path d="M2 14h44" stroke="#fff" stroke-width="2.6"/><path d="M6 14v26M42 14v26" stroke="#fff" stroke-width="2.6"/><path d="M14 14c2 8 6 10 10 10s8-2 10-10" stroke="#fff" stroke-width="2.6" fill="none"/><circle cx="24" cy="10" r="4" fill="#fff"/>',
  mision: '<circle cx="24" cy="24" r="20" fill="none" stroke="var(--amarillo)" stroke-width="3"/><circle cx="24" cy="24" r="11" fill="none" stroke="var(--amarillo)" stroke-width="3"/><circle cx="24" cy="24" r="3.5" fill="var(--rojo)"/>',
  objetivo: '<path d="M6 40 L20 14 L28 28 L34 20 L42 40 Z" fill="none" stroke="var(--verde)" stroke-width="3" stroke-linejoin="round"/><circle cx="36" cy="11" r="5" fill="var(--amarillo)"/>',
  valores: '<path d="M24 40 C10 30 6 22 10 15 C14 8 22 10 24 16 C26 10 34 8 38 15 C42 22 38 30 24 40 Z" fill="none" stroke="var(--rojo)" stroke-width="3" stroke-linejoin="round"/>',
};

export const icon = (name) => raw(`<svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">${I[name] || ''}</svg>`);
