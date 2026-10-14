/** Controlador de la página de cobro: conecta formulario, modelo y vista. */
import { CONFIG } from '../../config.js';
import { fetchMarket } from '../../models/market.model.js';
import { fetchCrcPerUsd } from '../../models/fx.model.js';
import { isWallet, parseAmount, cleanConcept, buildPayment } from './cobrar.model.js';
import { view } from './cobrar.view.js';

let price = null;
let last = null;

async function loadPrice() {
  try {
    const m = await fetchMarket();
    if (m.status === 'ok' && m.price) { price = m.price; view.price(`Precio de MVIBE: $${price.toFixed(10).replace(/0+$/, '')} · en vivo`); }
    else view.price('Precio de MVIBE no disponible ahora');
  } catch { view.price('No se pudo cargar el precio. Reintentando…'); }
}

async function loadRate() {
  try {
    const r = await fetchCrcPerUsd();
    if (r) view.rate(r, 'Tipo de cambio de referencia cargado automáticamente. Podés ajustarlo.');
    else throw new Error();
  } catch { view.rate(null, 'No se pudo cargar el tipo de cambio; escribilo a mano.'); }
}

function onSubmit(e) {
  e.preventDefault();
  view.error('');
  const f = e.currentTarget;
  const wallet = f.wallet.value.trim();
  const amount = parseAmount(f.monto.value);
  const currency = f.moneda.value === 'USD' ? 'USD' : 'CRC';
  const rate = parseAmount(f.tc.value);
  const concept = cleanConcept(f.concepto.value);

  view.invalid('wallet', !isWallet(wallet));
  view.invalid('monto', !amount);
  if (!isWallet(wallet)) return view.error('La dirección no parece válida. Copiala de nuevo desde Recibir → Solana en tu wallet.');
  if (!amount) return view.error('Escribí un monto válido, con hasta 2 decimales.');
  if (!price) return view.error('Todavía no tenemos el precio de MVIBE. Esperá unos segundos y probá de nuevo.');
  if (typeof window.qrcode !== 'function') return view.error('No se pudo cargar el generador de QR. Recargá la página.');

  try {
    const pay = buildPayment({ wallet, amount, currency, rate, priceUsd: price, concept });
    last = { ...pay, wallet };
    view.result(pay, { amount, currency, wallet });
  } catch (err) {
    const msg = {
      amount: 'El monto es demasiado alto para un cobro. Revisalo.',
      rate: 'Escribí un tipo de cambio válido (colones por dólar).',
      price: 'El precio de MVIBE no está disponible ahora.',
    }[err.message] || 'Revisá los datos e intentá de nuevo.';
    view.error(msg);
  }
}

async function onCopy() {
  if (!last) return;
  const text = `Pago MonkeyVibe\nEnviar: ${last.mvibe.toFixed(2)} MVIBE\nA la dirección: ${last.wallet}\nContrato MVIBE: ${CONFIG.mint}`;
  try { await navigator.clipboard.writeText(text); view.copied('Copiado'); } catch { view.copied('No se pudo copiar'); }
}

export function startCobrar() {
  document.getElementById('cobro-form').addEventListener('submit', onSubmit);
  document.getElementById('copy').addEventListener('click', onCopy);
  loadPrice();
  loadRate();
  setInterval(() => { if (!document.hidden) loadPrice(); }, CONFIG.refreshMs);
}
