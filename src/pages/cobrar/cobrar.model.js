/**
 * Modelo de la página de cobro: validación estricta y armado del enlace Solana Pay.
 * Toda entrada del usuario se valida aquí antes de generar el QR.
 */
import { CONFIG } from '../../config.js';

const B58 = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
const MAX = { CRC: 10_000_000, USD: 20_000 };

export const isWallet = (w) => B58.test(w);

export function parseAmount(v) {
  const s = String(v).trim().replace(/\s/g, '').replace(/,(?=\d{1,2}$)/, '.').replace(/[^\d.]/g, '');
  if (!/^\d+(\.\d{1,2})?$/.test(s)) return null;
  const n = Number(s);
  return Number.isFinite(n) && n > 0 ? n : null;
}

/** Limpia el concepto: solo letras, números, espacios y signos simples. */
export const cleanConcept = (v) => String(v).normalize('NFC').replace(/[^\p{L}\p{N} .,·:#\-()]/gu, '').trim().slice(0, 60);

export function buildPayment({ wallet, amount, currency, rate, priceUsd, concept }) {
  if (!isWallet(wallet)) throw new Error('wallet');
  if (!(amount > 0) || amount > MAX[currency]) throw new Error('amount');
  if (currency === 'CRC' && !(rate > 300 && rate < 1500)) throw new Error('rate');
  if (!(priceUsd > 0)) throw new Error('price');
  const usd = currency === 'CRC' ? amount / rate : amount;
  const mvibe = Math.ceil((usd / priceUsd) * 100) / 100;
  const message = concept || 'Pago con MVIBE';
  // Solana Pay exige codificación de URI (%20), no '+' para espacios.
  const q = { amount: mvibe.toFixed(2), 'spl-token': CONFIG.mint, label: 'MonkeyVibe', message };
  const query = Object.entries(q).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
  return { url: `solana:${wallet}?${query}`, mvibe, usd, message };
}
