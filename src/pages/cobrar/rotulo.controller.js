/** Controlador del rótulo imprimible. */
import { isWallet, buildOpenRequest, cleanPlace } from './cobrar.model.js';
import { drawRotulo } from './rotulo.js';

const $ = (id) => document.getElementById(id);
let blobUrl = null;

async function onSubmit(e) {
  e.preventDefault();
  const err = $('rot-err');
  err.textContent = '';
  const wallet = $('rot-wallet').value.trim();
  const place = cleanPlace($('rot-place').value);
  const lang = $('rot-lang').value === 'en' ? 'en' : 'es';
  $('rot-wallet').setAttribute('aria-invalid', isWallet(wallet) ? 'false' : 'true');
  if (!isWallet(wallet)) { err.textContent = 'La dirección no parece válida. Copiala de nuevo desde Recibir → Solana en tu wallet.'; return; }
  if (typeof window.qrcode !== 'function') { err.textContent = 'No se pudo cargar el generador de QR. Recargá la página.'; return; }

  const btn = e.submitter || e.currentTarget.querySelector('button[type="submit"]');
  btn.disabled = true; btn.textContent = 'Creando…';
  try {
    const canvas = await drawRotulo({ lang, url: buildOpenRequest(wallet), wallet, place });
    const blob = await new Promise((ok) => canvas.toBlob(ok, 'image/png'));
    if (!blob) throw new Error('blob');
    if (blobUrl) URL.revokeObjectURL(blobUrl);
    blobUrl = URL.createObjectURL(blob);
    const img = new Image();
    img.id = 'rot-img';
    img.alt = lang === 'en' ? 'Sign: We accept MVIBE, with payment QR' : 'Rótulo: Aquí aceptamos MVIBE, con QR de pago';
    img.src = blobUrl;
    $('rot-preview').replaceChildren(img);
    $('rot-dl').href = blobUrl;
    $('rot-dl').download = `rotulo-mvibe-${lang}.png`;
    $('rot-actions').hidden = false;
    $('rot-tip').hidden = false;
  } catch {
    err.textContent = 'No se pudo crear el rótulo. Recargá la página e intentá de nuevo.';
  } finally {
    btn.disabled = false; btn.textContent = 'Crear rótulo';
  }
}

export function startRotulo() {
  const form = $('rot-form');
  if (!form) return;
  form.addEventListener('submit', onSubmit);
  // Si ya pegó la wallet arriba, se copia sola al rótulo.
  $('wallet')?.addEventListener('change', (e) => { if (!$('rot-wallet').value) $('rot-wallet').value = e.target.value.trim(); });
  $('rot-print').addEventListener('click', () => {
    document.body.classList.add('printing-rotulo');
    window.print();
  });
  window.addEventListener('afterprint', () => document.body.classList.remove('printing-rotulo'));
}
