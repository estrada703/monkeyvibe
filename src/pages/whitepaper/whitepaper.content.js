/**
 * Texto del Whitepaper de MonkeyVibe (ES / EN).
 * Bloques: { p: rich } párrafo · { ul: [rich…] } lista · { table: [[k, rich]…] } ficha · { note: rich } aviso
 * Para publicar una versión nueva: subí `version`, cambiá `date` y agregá una línea a `history`.
 */
import { CONFIG } from '../../config.js';

const L = CONFIG.links;
const MINT = CONFIG.mint;
const FUND = '7TDfr3qrR9PqUZ5Wv2iTE4pUWLPBzCBcAfjcMyq89Rfk';

export const WP = {
  es: {
    meta: { title: 'Whitepaper · MonkeyVibe ($MVIBE)', description: 'Whitepaper de MonkeyVibe ($MVIBE): el token, cómo funciona, el Fondo Mono Verde, la hoja de ruta y sus riesgos.' },
    ui: { back: '← Volver al inicio', lang: 'EN', langAria: 'Switch to English', print: 'Descargar PDF', toc: 'Contenido', version: 'Versión', updated: 'Actualizado', top: 'Volver arriba ↑' },
    version: '1.0', date: 'Octubre 2026',
    eyebrow: 'Whitepaper',
    title: 'MonkeyVibe ($MVIBE)',
    lead: 'Una memecoin comunitaria de Costa Rica en Solana, hecha para pagos reales en comercios locales y para cuidar a los monos.',
    sections: [
      { id: 'resumen', h: 'Resumen', blocks: [
        { p: 'MonkeyVibe ($MVIBE) es un token comunitario creado en Costa Rica sobre la red Solana. Nació como memecoin, con humor y vibra Pura Vida, pero con una meta concreta: que se pueda usar para pagar en sodas, tours, escuelas de surf y pequeños negocios, de forma rápida y casi sin comisiones.' },
        { p: 'Este documento explica qué es MVIBE, cómo funciona, qué herramientas existen hoy, hacia dónde vamos y cuáles son sus riesgos. Lo escribimos en lenguaje sencillo, para que cualquiera lo entienda.' },
      ] },
      { id: 'idea', h: 'Por qué MonkeyVibe', blocks: [
        { p: 'Costa Rica recibe millones de turistas y tiene miles de pequeños negocios. Muchos de esos visitantes ya usan cripto, pero aceptarla suele ser complicado: datáfonos especiales, contratos, comisiones altas o apps difíciles.' },
        { p: 'MonkeyVibe propone algo más simple:' },
        { ul: [
          'Un comercio solo necesita una wallet gratuita y un código QR impreso.',
          'El pago va directo del cliente al comercio, en segundos, sin intermediarios.',
          'La comisión de la red Solana es de fracciones de centavo.',
          'La identidad es local y cercana: monos, carretas, selva y Pura Vida.',
        ] },
      ] },
      { id: 'token', h: 'El token', blocks: [
        { table: [
          ['Nombre', 'MonkeyVibe'],
          ['Símbolo', 'MVIBE'],
          ['Red', 'Solana (token SPL)'],
          ['Contrato', [{ b: MINT }]],
          ['Suministro total', '1.000.000.000 MVIBE, fijo'],
          ['Decimales', '6'],
          ['Lanzamiento', '13 de octubre de 2026, en pump.fun. Lanzamiento abierto: sin preventa ni ventas privadas'],
          ['Asignación al equipo', 'Ninguna reservada. El equipo compró en la misma curva y al mismo precio que cualquier persona.'],
          ['Creación y congelamiento', ['pump.fun crea el token sin autoridad para emitir más MVIBE ni congelar wallets. Se puede comprobar en vivo en la sección ', { a: 'Transparencia', href: '/#transparencia' }, '.']],
        ] },
        { note: ['Verificá siempre el contrato antes de comprar: el oficial termina en ', { b: '…FaYpump' }, '. Existen copias falsas con el mismo nombre.'] },
      ] },
      { id: 'mercado', h: 'Cómo funciona el mercado', blocks: [
        { p: 'MVIBE se lanzó en pump.fun, que funciona con una «curva de precio»: cada compra sube un poco el precio y cada venta lo baja. No hay un precio fijado por el equipo; lo define el mercado.' },
        { p: 'Cuando la curva se completa, pump.fun mueve automáticamente la liquidez a un pool de mercado abierto en Solana, según sus reglas vigentes. A eso se le llama «graduarse».' },
        { p: ['Mientras MVIBE está en la curva, algunas wallets todavía no muestran su precio y marcan $0. Las monedas siguen ahí; el precio en vivo se ve en ', { a: 'nuestra página', href: '/#precio' }, ', en pump.fun o en DexScreener.'] },
      ] },
      { id: 'utilidad', h: 'Qué se puede hacer hoy', blocks: [
        { ul: [
          ['Comprar en la página: en ', { a: 'monkeyvibecr.com', href: '/#comprar' }, ' se compra MVIBE sin salir del sitio, con la tecnología de Jupiter y la moneda oficial fija.'],
          ['Cobrar con QR: en ', { a: 'monkeyvibecr.com/cobrar', href: L.cobrar }, ' un comercio escribe el monto en colones o dólares y genera un QR de pago (Solana Pay) con el monto exacto.'],
          'Rótulo para el local: en la misma página, el comercio crea gratis su afiche «Aquí aceptamos MVIBE» con su propio QR, en español o inglés.',
          'Kit para comercios: una guía de dos páginas para empezar a cobrar en 10 minutos.',
        ] },
        { p: 'En todos los casos, el dinero va directo de wallet a wallet. Nuestra página nunca recibe, guarda ni toca los fondos de nadie.' },
      ] },
      { id: 'fondo', h: 'Fondo Mono Verde', blocks: [
        { p: 'pump.fun le paga al creador de cada token una parte de las comisiones de compra y venta. MonkeyVibe destina parte de esas recompensas al Fondo Mono Verde, para apoyar proyectos que instalan puentes de dosel: cuerdas y estructuras que ayudan a los monos a cruzar calles y cables eléctricos sin peligro.' },
        { table: [
          ['Wallet del fondo', [{ b: FUND }]],
          ['Control', 'Es una wallet exclusiva para el fondo, separada de cualquier wallet personal.'],
          ['Donaciones', 'Cada una se publica con su transacción y el comprobante de la organización que la recibe.'],
          ['Organización aliada', 'Se anunciará públicamente, junto con el porcentaje destinado.'],
        ] },
        { p: ['El saldo del fondo se lee en vivo en la sección ', { a: 'Transparencia', href: '/#transparencia' }, ', y cualquiera puede revisar sus movimientos en ', { a: 'Solscan', href: L.solscanAccount(FUND) }, '.'] },
      ] },
      { id: 'ruta', h: 'Hoja de ruta', blocks: [
        { table: [
          ['Q4 2026 · Lanzamiento', 'MVIBE en pump.fun, sitio web, compra directa, cobro con QR, rótulo para comercios y redes sociales.'],
          ['Q1 2027 · Tropa', 'Concursos de memes y arte de carreta, primer drop de la tienda MonkeyVibe y anuncio de la organización del Fondo Mono Verde.'],
          ['Q2 2027 · Primeros comercios', 'Piloto con sodas y cafeterías aliadas, y tours de avistamiento con guías locales.'],
          ['2027 en adelante · Cobro para todos', 'Herramientas de cobro para más negocios y expansión a surf y hospedaje en la costa.'],
        ] },
        { p: ['Las fechas son estimadas. El estado de cada paso se actualiza en la sección ', { a: 'Avances', href: '/#avances' }, '.'] },
      ] },
      { id: 'seguridad', h: 'Seguridad y transparencia', blocks: [
        { ul: [
          'Nadie de MonkeyVibe te va a pedir tus 12 palabras secretas, códigos ni que conectés tu wallet en otra página. Nunca.',
          'El equipo no escribe primero por mensaje privado. Quien lo haga en nuestro nombre es una estafa.',
          'Los datos del token se leen directamente de la blockchain, no los escribimos nosotros.',
          'La página no guarda datos de wallets ni usa cookies de seguimiento.',
        ] },
      ] },
      { id: 'equipo', h: 'Equipo y contacto', blocks: [
        { p: ['MonkeyVibe es un proyecto pequeño, hecho en Costa Rica. El sitio fue desarrollado por ', { a: 'cloudmonkeycr.com', href: L.credit }, '.'] },
        { p: ['Contacto: ', { a: CONFIG.email, href: `mailto:${CONFIG.email}` }, ' · X: ', { a: '@monkeyvibecr', href: 'https://x.com/monkeyvibecr' }, ' · TikTok: ', { a: '@monkeyvibe54', href: 'https://www.tiktok.com/@monkeyvibe54' }, ' · Telegram: ', { a: 't.me/monkeyvibecr', href: 'https://t.me/monkeyvibecr' }, '.'] },
      ] },
      { id: 'riesgos', h: 'Riesgos y aviso legal', blocks: [
        { ul: [
          'MVIBE es una memecoin comunitaria. No representa acciones de ninguna empresa ni da derecho a ganancias, dividendos o reembolsos.',
          'Su precio puede subir o bajar mucho, incluso a cero. Comprá solo lo que estés dispuesto a perder.',
          'Los planes de la hoja de ruta son intenciones, no promesas. Pueden cambiar o no cumplirse.',
          'Las criptomonedas tienen riesgos técnicos: errores al enviar, estafas, pérdida de las palabras secretas.',
          'Las reglas sobre cripto cambian según el país. Si cobrás con MVIBE, consultá con tu contador cómo registrarlo.',
        ] },
        { note: 'Nada en este documento es asesoría financiera, legal ni fiscal.' },
      ] },
      { id: 'versiones', h: 'Historial de versiones', blocks: [
        { table: [['1.0 · Octubre 2026', 'Primera versión publicada.']] },
      ] },
    ],
  },

  en: {
    meta: { title: 'Whitepaper · MonkeyVibe ($MVIBE)', description: 'MonkeyVibe ($MVIBE) whitepaper: the token, how it works, the Green Monkey Fund, the roadmap and its risks.' },
    ui: { back: '← Back to home', lang: 'ES', langAria: 'Cambiar a español', print: 'Download PDF', toc: 'Contents', version: 'Version', updated: 'Updated', top: 'Back to top ↑' },
    version: '1.0', date: 'October 2026',
    eyebrow: 'Whitepaper',
    title: 'MonkeyVibe ($MVIBE)',
    lead: 'A community memecoin from Costa Rica on Solana, built for real payments at local businesses and for protecting monkeys.',
    sections: [
      { id: 'resumen', h: 'Summary', blocks: [
        { p: 'MonkeyVibe ($MVIBE) is a community token created in Costa Rica on the Solana network. It was born as a memecoin, with humor and a Pura Vida spirit, but with a concrete goal: to be usable for paying at local diners, tours, surf schools and small businesses, quickly and with almost no fees.' },
        { p: 'This document explains what MVIBE is, how it works, which tools exist today, where we are heading and what the risks are. We wrote it in plain language so anyone can follow it.' },
      ] },
      { id: 'idea', h: 'Why MonkeyVibe', blocks: [
        { p: 'Costa Rica welcomes millions of tourists and has thousands of small businesses. Many of those visitors already use crypto, but accepting it is usually complicated: special terminals, contracts, high fees or hard-to-use apps.' },
        { p: 'MonkeyVibe proposes something simpler:' },
        { ul: [
          'A business only needs a free wallet and a printed QR code.',
          'Payment goes straight from customer to business, in seconds, with no middlemen.',
          'Solana network fees are fractions of a cent.',
          'A local, friendly identity: monkeys, oxcarts, jungle and Pura Vida.',
        ] },
      ] },
      { id: 'token', h: 'The token', blocks: [
        { table: [
          ['Name', 'MonkeyVibe'],
          ['Symbol', 'MVIBE'],
          ['Network', 'Solana (SPL token)'],
          ['Contract', [{ b: MINT }]],
          ['Total supply', '1,000,000,000 MVIBE, fixed'],
          ['Decimals', '6'],
          ['Launch', 'October 13, 2026, on pump.fun. Open launch: no presale, no private sales'],
          ['Team allocation', 'None reserved. The team bought on the same curve and at the same price as anyone else.'],
          ['Minting and freezing', ['pump.fun creates the token with no authority to mint more MVIBE or freeze wallets. You can check it live in the ', { a: 'Transparency', href: '/#transparencia' }, ' section.']],
        ] },
        { note: ['Always check the contract before buying: the official one ends in ', { b: '…FaYpump' }, '. Fake copies with the same name exist.'] },
      ] },
      { id: 'mercado', h: 'How the market works', blocks: [
        { p: 'MVIBE launched on pump.fun, which uses a "price curve": each buy raises the price slightly and each sale lowers it. The team does not set the price; the market does.' },
        { p: 'When the curve completes, pump.fun automatically moves liquidity to an open-market pool on Solana, under its current rules. This is called "graduating".' },
        { p: ['While MVIBE is on the curve, some wallets cannot show its price yet and display $0. The coins are still there; the live price is on ', { a: 'our website', href: '/#precio' }, ', pump.fun or DexScreener.'] },
      ] },
      { id: 'utilidad', h: 'What you can do today', blocks: [
        { ul: [
          ['Buy on the website: at ', { a: 'monkeyvibecr.com', href: '/#comprar' }, ' you can buy MVIBE without leaving the site, powered by Jupiter, with the official token locked in.'],
          ['Accept payments with QR: at ', { a: 'monkeyvibecr.com/cobrar', href: L.cobrar }, ' a business types the amount in colones or dollars and gets a Solana Pay QR for that exact amount.'],
          'Store sign: on the same page, a business creates its free «We accept MVIBE» poster with its own QR, in Spanish or English.',
          'Business kit: a two-page guide to start accepting payments in 10 minutes.',
        ] },
        { p: 'In every case, money goes directly from wallet to wallet. Our website never receives, holds or touches anyone\'s funds.' },
      ] },
      { id: 'fondo', h: 'Green Monkey Fund', blocks: [
        { p: 'pump.fun pays each token creator a share of trading fees. MonkeyVibe sends part of those rewards to the Green Monkey Fund (Fondo Mono Verde), to support projects that install canopy bridges: ropes and structures that help monkeys cross roads and power lines safely.' },
        { table: [
          ['Fund wallet', [{ b: FUND }]],
          ['Control', 'A wallet used only for the fund, separate from any personal wallet.'],
          ['Donations', 'Each one is published with its transaction and the receiving organization\'s receipt.'],
          ['Partner organization', 'It will be announced publicly, together with the share allocated.'],
        ] },
        { p: ['The fund balance is read live in the ', { a: 'Transparency', href: '/#transparencia' }, ' section, and anyone can review its movements on ', { a: 'Solscan', href: L.solscanAccount(FUND) }, '.'] },
      ] },
      { id: 'ruta', h: 'Roadmap', blocks: [
        { table: [
          ['Q4 2026 · Launch', 'MVIBE on pump.fun, website, direct buying, QR payments, business sign and social media.'],
          ['Q1 2027 · Troop', 'Meme and oxcart-art contests, first MonkeyVibe store drop and announcement of the Green Monkey Fund partner.'],
          ['Q2 2027 · First businesses', 'Pilot with partner diners and cafés, and monkey-watching tours with local guides.'],
          ['2027 onward · Payments for all', 'Payment tools for more businesses and expansion to surf and lodging on the coast.'],
        ] },
        { p: ['Dates are estimates. The status of each step is updated in the ', { a: 'Progress', href: '/#avances' }, ' section.'] },
      ] },
      { id: 'seguridad', h: 'Security and transparency', blocks: [
        { ul: [
          'Nobody from MonkeyVibe will ever ask for your 12 secret words, codes, or to connect your wallet on another site. Ever.',
          'The team never messages first in private. Anyone doing so in our name is a scam.',
          'Token data is read directly from the blockchain; we do not write it.',
          'The website stores no wallet data and uses no tracking cookies.',
        ] },
      ] },
      { id: 'equipo', h: 'Team and contact', blocks: [
        { p: ['MonkeyVibe is a small project made in Costa Rica. The website was built by ', { a: 'cloudmonkeycr.com', href: L.credit }, '.'] },
        { p: ['Contact: ', { a: CONFIG.email, href: `mailto:${CONFIG.email}` }, ' · X: ', { a: '@monkeyvibecr', href: 'https://x.com/monkeyvibecr' }, ' · TikTok: ', { a: '@monkeyvibe54', href: 'https://www.tiktok.com/@monkeyvibe54' }, ' · Telegram: ', { a: 't.me/monkeyvibecr', href: 'https://t.me/monkeyvibecr' }, '.'] },
      ] },
      { id: 'riesgos', h: 'Risks and legal notice', blocks: [
        { ul: [
          'MVIBE is a community memecoin. It does not represent shares in any company and gives no right to profits, dividends or refunds.',
          'Its price can rise or fall sharply, even to zero. Only buy what you are willing to lose.',
          'Roadmap plans are intentions, not promises. They may change or not happen.',
          'Crypto carries technical risks: sending mistakes, scams, losing your secret words.',
          'Crypto rules vary by country. If you accept MVIBE as payment, ask your accountant how to record it.',
        ] },
        { note: 'Nothing in this document is financial, legal or tax advice.' },
      ] },
      { id: 'versiones', h: 'Version history', blocks: [
        { table: [['1.0 · October 2026', 'First published version.']] },
      ] },
    ],
  },
};
