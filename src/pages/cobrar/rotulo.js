/**
 * Rótulo imprimible «Aquí aceptamos MVIBE».
 * Dibuja en un canvas la plantilla oficial (ES/EN), el QR del comercio en el cuadro blanco,
 * la wallet abreviada en la franja y la ubicación junto al pin. Todo ocurre en el navegador.
 */
const LAYOUT = {
  es: { src: '/assets/img/rotulo-es.webp', qr: [602, 638, 962, 947], strip: [598, 971, 965, 1026], text: [688, 1057], tail: ', COSTA RICA', fallback: 'COSTA RICA' },
  en: { src: '/assets/img/rotulo-en.webp', qr: [600, 616, 962, 934], strip: [598, 958, 964, 1010], text: [689, 1047], tail: ', COSTA RICA', fallback: 'COSTA RICA' },
};
const W = 1024, H = 1536, SCALE = 2, TEXT_MAX_X = 955, INK = '#141414';

const cache = {};
function loadImage(src) {
  cache[src] ??= new Promise((ok, fail) => {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => ok(img);
    img.onerror = () => { delete cache[src]; fail(new Error('img')); };
    img.src = src;
  });
  return cache[src];
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}

function drawQR(ctx, url, [x0, y0, x1, y1]) {
  // Fondo blanco puro dentro del cuadro de la plantilla.
  ctx.fillStyle = '#fff';
  roundRect(ctx, x0 + 2, y0 + 2, x1 - x0 - 4, y1 - y0 - 4, 10); ctx.fill();
  const qr = window.qrcode(0, 'M');
  qr.addData(url);
  qr.make();
  const n = qr.getModuleCount();
  const quiet = 2; // el blanco del cuadro completa la zona de silencio
  const side = Math.min(x1 - x0, y1 - y0) - 8;
  const cell = side / (n + quiet * 2);
  const ox = (x0 + x1) / 2 - (n * cell) / 2, oy = (y0 + y1) / 2 - (n * cell) / 2;
  ctx.fillStyle = '#000';
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
    // +0.02 evita líneas finas entre módulos al escalar
    if (qr.isDark(r, c)) ctx.fillRect(ox + c * cell, oy + r * cell, cell + 0.02, cell + 0.02);
  }
}

function fitText(ctx, text, font, size, maxW) {
  let s = size;
  do { ctx.font = font.replace('{s}', s); if (ctx.measureText(text).width <= maxW) break; s -= 1; } while (s > 12);
  return s;
}

/** Devuelve un canvas listo (2048×3072). */
export async function drawRotulo({ lang, url, wallet, place }) {
  const L = LAYOUT[lang] || LAYOUT.es;
  const [img] = await Promise.all([
    loadImage(L.src),
    document.fonts?.load('700 26px Figtree').catch(() => {}),
    document.fonts?.load('600 20px "JetBrains Mono"').catch(() => {}),
  ]);
  const cv = document.createElement('canvas');
  cv.width = W * SCALE; cv.height = H * SCALE;
  const ctx = cv.getContext('2d');
  ctx.scale(SCALE, SCALE);
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, W, H);

  ctx.imageSmoothingEnabled = false;
  drawQR(ctx, url, L.qr);

  // Franja: wallet abreviada para que el cliente confirme a quién le paga.
  const [sx0, sy0, sx1, sy1] = L.strip;
  const short = `${wallet.slice(0, 6)}…${wallet.slice(-6)}`;
  const label = (lang === 'en' ? 'WALLET ' : 'WALLET ') + short;
  ctx.fillStyle = INK; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  fitText(ctx, label, '600 {s}px "JetBrains Mono", monospace', 24, sx1 - sx0 - 40);
  ctx.fillText(label, (sx0 + sx1) / 2, (sy0 + sy1) / 2 + 1);

  // Ubicación junto al pin.
  const where = (place ? place.toUpperCase() + L.tail : L.fallback);
  ctx.textAlign = 'left';
  const [tx, ty] = L.text;
  fitText(ctx, where, '700 {s}px Figtree, system-ui, sans-serif', 27, TEXT_MAX_X - tx);
  ctx.fillText(where, tx, ty);
  return cv;
}
