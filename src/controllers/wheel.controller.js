/** Animación de la rueda de carreta (canvas). Respeta "reducir movimiento". */
const COLS = ['#F0574C', '#F5B935', '#5B9BE8', '#5BC489', '#FFF3D6'];
let frame = 0;
let stopResize = null;

export function mountWheel(canvas) {
  cancelAnimationFrame(frame);
  stopResize?.();
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W = 0; let t = 0;

  const size = () => {
    const r = canvas.getBoundingClientRect(); const d = devicePixelRatio || 1;
    W = r.width; canvas.width = r.width * d; canvas.height = r.height * d; ctx.setTransform(d, 0, 0, d, 0, 0);
  };
  const ring = (R, n, shape, rot, c1, c2) => {
    for (let i = 0; i < n; i++) {
      ctx.save(); ctx.rotate(rot + (i * 2 * Math.PI) / n);
      ctx.fillStyle = ctx.strokeStyle = i % 2 ? c1 : c2;
      ctx.beginPath();
      if (shape === 'petal') { ctx.moveTo(0, R * 0.62); ctx.quadraticCurveTo(R * 0.16, R * 0.82, 0, R); ctx.quadraticCurveTo(-R * 0.16, R * 0.82, 0, R * 0.62); ctx.fill(); }
      else if (shape === 'tri') { ctx.moveTo(-R * 0.07, R * 0.88); ctx.lineTo(R * 0.07, R * 0.88); ctx.lineTo(0, R * 0.98); ctx.fill(); }
      else if (shape === 'dot') { ctx.arc(0, R, R * 0.025, 0, 7); ctx.fill(); }
      else { ctx.lineWidth = 2; ctx.globalAlpha = 0.55; ctx.moveTo(0, R * 0.2); ctx.lineTo(0, R); ctx.stroke(); }
      ctx.restore();
    }
  };
  const circle = (r, c, w) => { ctx.beginPath(); ctx.arc(0, 0, r, 0, 7); ctx.strokeStyle = c; ctx.lineWidth = w; ctx.stroke(); };
  const draw = () => {
    const R = W / 2; ctx.clearRect(0, 0, W, W); ctx.save(); ctx.translate(R, R);
    circle(R * 0.96, COLS[1], R * 0.03);
    ring(R * 0.96, 48, 'tri', t * 0.4, COLS[0], COLS[2]);
    circle(R * 0.84, COLS[4], 1);
    ring(R * 0.8, 72, 'dot', -t * 0.6, COLS[1], COLS[4]);
    ring(R * 0.74, 16, 'petal', t * 0.25, COLS[0], COLS[2]);
    ring(R * 0.5, 12, 'petal', -t * 0.35, COLS[1], COLS[3]);
    ring(R * 0.6, 24, 'spoke', t * 0.15, COLS[4], COLS[1]);
    circle(R * 0.38, COLS[3], R * 0.015);
    ctx.restore();
  };
  const loop = () => { t += 0.004; draw(); frame = requestAnimationFrame(loop); };
  const onResize = () => { size(); draw(); };

  size(); draw();
  addEventListener('resize', onResize);
  stopResize = () => removeEventListener('resize', onResize);
  if (!reduce) frame = requestAnimationFrame(loop);
}
