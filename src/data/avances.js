/**
 * AVANCES DEL PROYECTO (bitácora pública)
 * ───────────────────────────────────────
 * Para actualizar: cambiá el `status` de un avance o agregá uno nuevo.
 *   status: 'done' (hecho) · 'progress' (en proceso) · 'next' (lo que sigue)
 *   date:   texto libre, ej. 'Oct 2026' (opcional)
 *   link:   enlace opcional (https://… o una ruta de la página como '/whitepaper')
 * Cada texto va en español (es) y en inglés (en).
 */
import { CONFIG } from '../config.js';

/** Usuarios de redes. Escribilos sin @ (ej. 'monkeyvibecr'). Vacío = todavía no se muestra el enlace. */
export const SOCIAL = {
  x: 'monkeyvibecr',
  tiktok: 'monkeyvibe54',
  telegram: 'monkeyvibecr',
};

const xUrl = SOCIAL.x ? `https://x.com/${SOCIAL.x}` : '';
const ttUrl = SOCIAL.tiktok ? `https://www.tiktok.com/@${SOCIAL.tiktok}` : '';
const tgUrl = SOCIAL.telegram ? `https://t.me/${SOCIAL.telegram}` : '';

export const AVANCES = [
  // ── En proceso ──
  { status: 'progress', date: 'Oct 2026',
    es: ['Verificación del token', 'Estamos actualizando los datos de MVIBE (logo, sitio, redes) en las plataformas de Solana como Jupiter y DexScreener. Cada revisión tiene sus tiempos.'],
    en: ['Token verification', 'We are updating MVIBE details (logo, website, socials) on Solana platforms such as Jupiter and DexScreener. Each review takes its own time.'] },
  { status: 'progress', date: 'Oct 2026', link: CONFIG.links.cobrar,
    es: ['Primeros comercios aliados', 'Conversando con sodas, cafeterías y guías locales. Ya tienen listo el cobro con QR y el rótulo gratuito.'],
    en: ['First partner businesses', 'Talking with local diners, cafés and guides. QR checkout and the free sign are ready for them.'] },

  // ── Hecho ──
  { status: 'done', date: 'Oct 2026', link: '/whitepaper',
    es: ['Whitepaper v1.0', 'El documento que explica qué es MVIBE, cómo funciona, el Fondo Mono Verde y sus riesgos.'],
    en: ['Whitepaper v1.0', 'The document that explains what MVIBE is, how it works, the Green Monkey Fund and its risks.'] },
  { status: 'done', date: 'Oct 2026', link: tgUrl,
    es: ['Comunidad en Telegram', 'El grupo oficial para conversar, preguntar y enterarte primero de las novedades.'],
    en: ['Telegram community', 'The official group to chat, ask questions and hear the news first.'] },
  { status: 'done', date: 'Oct 2026', link: xUrl,
    es: ['Cuenta oficial en X', 'Novedades, avances y la comunidad, todos los días.'],
    en: ['Official X account', 'News, progress and community, every day.'] },
  { status: 'done', date: 'Oct 2026', link: ttUrl,
    es: ['Cuenta oficial en TikTok', 'Videos cortos: cómo comprar, cómo cobrar y la vibra Pura Vida.'],
    en: ['Official TikTok account', 'Short videos: how to buy, how to accept payments, and the Pura Vida vibe.'] },
  { status: 'done', date: 'Oct 2026', link: '#transparencia',
    es: ['Transparencia en vivo', 'Verificación del token leída de la blockchain y wallet pública del Fondo Mono Verde.'],
    en: ['Live transparency', 'Token checks read from the blockchain and the public Green Monkey Fund wallet.'] },
  { status: 'done', date: 'Oct 2026', link: CONFIG.links.cobrar,
    es: ['Cobro con QR y rótulo para comercios', 'Cualquier negocio genera su QR de cobro y su rótulo «Aquí aceptamos MVIBE», gratis.'],
    en: ['QR checkout and sign for businesses', 'Any business can create its payment QR and its «We accept MVIBE» sign, for free.'] },
  { status: 'done', date: 'Oct 2026', link: '#comprar',
    es: ['Compra directa en la página', 'Comprá MVIBE sin salir de monkeyvibecr.com, con la moneda oficial fija.'],
    en: ['Buy right on the website', 'Buy MVIBE without leaving monkeyvibecr.com, with the official token locked in.'] },
  { status: 'done', date: 'Oct 2026',
    es: ['Sitio web monkeyvibecr.com', 'Precio en vivo, guías paso a paso y versión en inglés.'],
    en: ['Website monkeyvibecr.com', 'Live price, step-by-step guides and an English version.'] },
  { status: 'done', date: '13 Oct 2026', link: CONFIG.links.pumpfun,
    es: ['Lanzamiento en pump.fun', 'MVIBE nace en Solana con 1.000.000.000 de unidades, sin preventa.'],
    en: ['Launch on pump.fun', 'MVIBE is born on Solana with 1,000,000,000 units and no presale.'] },

  // ── Lo que sigue ──
  { status: 'next',
    es: ['Graduación de pump.fun', 'Cuando se completa la curva de pump.fun, la liquidez pasa automáticamente a un pool de mercado abierto.'],
    en: ['Graduating from pump.fun', 'When the pump.fun curve completes, liquidity moves automatically to an open-market pool.'] },
  { status: 'next', link: '#transparencia',
    es: ['Primera donación del Fondo Mono Verde', 'Se publicará con su transacción y el comprobante de la organización.'],
    en: ['First Green Monkey Fund donation', 'It will be published with its transaction and the organization\'s receipt.'] },
  { status: 'next',
    es: ['Primer drop de la tienda MonkeyVibe', 'Camisetas y stickers con arte de carreta, solo con MVIBE.'],
    en: ['First MonkeyVibe store drop', 'T-shirts and stickers with oxcart art, MVIBE only.'] },
];
