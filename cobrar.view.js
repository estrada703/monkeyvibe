/** Vista de la página de cobro: solo usa textContent y el SVG que genera la librería de QR. */
const $ = (id) => document.getElementById(id);
const fmt = (n, d) => Number(n).toLocaleString('es-CR', { maximumFractionDigits: d });

export const view = {
  error(msg) { $('err').textContent = msg; },
  invalid(id, on) { $(id).setAttribute('aria-invalid', on ? 'true' : 'false'); },
  price(text) { $('price').textContent = text; },
  rate(value, info) { if (value && !$('tc').value) $('tc').value = value.toFixed(2); $('tc-info').textContent = info; },
  copied(text) { $('copy').textContent = text; },
  result({ url, mvibe, usd, message }, { amount, currency, wallet }) {
    const qr = window.qrcode(0, 'M');
    qr.addData(url);
    qr.make();
    // createSvgTag solo produce rectángulos SVG a partir de la matriz del QR (sin texto del usuario).
    $('qr').innerHTML = qr.createSvgTag({ cellSize: 6, margin: 2, scalable: true });
    $('amt').textContent = `${fmt(mvibe, 2)} MVIBE`;
    $('eq').textContent = `${currency === 'CRC' ? `₡${fmt(amount, 0)} · ` : ''}≈ $${usd.toFixed(2)} USD · ${message}`;
    $('open').href = url;
    $('to').textContent = `Para: ${wallet}`;
    $('copy').textContent = 'Copiar datos de pago';
    $('out').hidden = false;
  },
};
