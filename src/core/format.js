/** Formato de números para precios muy pequeños y montos grandes. */
export function money(n) {
  if (n == null || !Number.isFinite(n)) return '—';
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
  if (n >= 1e3) return `$${(n / 1e3).toFixed(2)}K`;
  if (n >= 1) return `$${n.toFixed(2)}`;
  if (n === 0) return '$0';
  const zeros = Math.max(0, -Math.floor(Math.log10(n)) - 1);
  return `$${n.toFixed(Math.min(zeros + 4, 12))}`;
}
export const pct = (n) => (n == null || !Number.isFinite(n) ? '—' : `${n > 0 ? '+' : ''}${n.toFixed(1)}%`);
export const clock = (lang) => new Date().toLocaleTimeString(lang === 'en' ? 'en-US' : 'es-CR', { hour: '2-digit', minute: '2-digit' });
