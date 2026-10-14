/** Contenido en español. Los textos viven aquí, separados de la presentación. */
import { CONFIG } from '../config.js';
const L = CONFIG.links;

export default {
  meta: {
    title: 'MonkeyVibe ($MVIBE) · Pura Vida en Solana',
    description: 'MonkeyVibe ($MVIBE): token comunitario Pura Vida en Solana, hecho en Costa Rica.',
  },
  nav: {
    home: 'MonkeyVibe inicio', menu: 'Menú', langBtn: 'EN', langAria: 'Switch to English',
    items: [['#comprar', 'Comprar'], ['#usos', 'Dónde pagar'], ['#ruta', 'Ruta'], ['#como', 'Cómo conseguirla'],
      ['#comercios', 'Comercios'], [L.cobrar, 'Cobrar'], ['#nosotros', 'Nosotros']],
  },
  hero: {
    eyebrow: '$MVIBE · token comunitario en Solana',
    h1a: 'Plata con vibra de selva.', h1b: 'Pura Vida.',
    lead: 'MonkeyVibe nace en Costa Rica para pagar el cafecito, el tour y la tabla de surf con una moneda que se mueve tan rápido como un mono congo entre los árboles.',
    ctaBuy: 'Comprar MVIBE aquí →', ctaPhantom: 'Comprar con Phantom →', ctaHow: 'Cómo comprar', ctaUses: 'Ver dónde se usará',
    contract: 'Contrato:', copy: 'Copiar', copied: 'Copiado', viewPump: 'Ver en pump.fun ↗',
    wheelAria: 'Rueda de carreta típica costarricense convertida en moneda', logoAlt: 'Logo de la moneda MonkeyVibe',
  },
  ficha: [['Red', 'Solana'], ['Símbolo', '$MVIBE'], ['Suministro', '1.000.000.000'], ['Lanzamiento', 'pump.fun']],
  comprar: {
    eyebrow: 'Compra directa', title: 'Comprá MVIBE aquí mismo',
    intro: 'Conectá tu wallet, elegí cuánto SOL usar y listo. La compra se hace directo desde tu wallet: esta página nunca guarda tu dinero.',
    steps: [
      ['1', 'Conectá tu wallet', 'Phantom, Solflare u otra wallet de Solana. Desde el celular, abrí esta página dentro del navegador de tu wallet.'],
      ['2', 'Escribí cuánto SOL usar', 'El widget te muestra al instante cuántos MVIBE recibís.'],
      ['3', 'Tocá Swap y confirmá', 'En segundos MVIBE aparece en tu wallet.'],
      ['!', 'Empezá con poquito', 'El precio de MVIBE cambia mucho. Comprá solo lo que estés dispuesto a perder.'],
    ],
    fbTitle: 'El widget de compra no cargó aquí.', fbText: 'Podés comprar igual con estas opciones:',
    fbJup: 'Comprar en Jupiter ↗', fbPump: 'Comprar en pump.fun ↗',
  },
  precio: {
    live: 'En vivo', title: 'Precio de MVIBE ahora', loading: 'Cargando datos…',
    labels: ['Precio', 'Cambio 24 h', 'Capitalización', 'Volumen 24 h'],
    note: 'El precio cambia minuto a minuto y puede bajar tanto como subir. Esto no es asesoría financiera. Datos de ',
    source: 'DexScreener', chartTitle: 'Gráfico de MVIBE',
    updated: 'Actualizado', empty: 'Aún sin operaciones registradas', error: 'No se pudieron cargar los datos. Reintentando…',
  },
  usos: {
    eyebrow: 'Proyectos en camino', title: 'Dónde vas a poder pagar con MVIBE',
    intro: 'Estos son los usos que estamos armando. Cada tarjeta dice en qué etapa va, sin adornos: lo que está en conversación todavía no es un hecho.',
    items: [
      { icon: 'cafe', chip: 'En conversaciones', kind: 'con', title: 'Sodas y cafeterías aliadas', text: 'Pagar el casado o el café chorreado escaneando un código QR con Phantom. El comercio recibe al instante.', ej: 'Ej: casado + fresco · 9.500 MVIBE*' },
      { icon: 'mono', chip: 'En diseño', kind: 'dis', title: 'Tours para ver monos', text: 'Guías locales en zonas como Manuel Antonio, Cahuita y Tortuguero cobrando tours de avistamiento en MVIBE, con descuento para holders.', ej: 'Meta: 3 guías piloto en el primer año' },
      { icon: 'surf', chip: 'Idea', kind: 'ide', title: 'Surf y hospedaje', text: 'Hostales y escuelas de surf en la costa del Pacífico aceptando MVIBE para clases, alquiler de tablas y noches.', ej: 'Zonas: Santa Teresa · Nosara · Dominical' },
      { icon: 'camisa', chip: 'En diseño', kind: 'dis', title: 'Tienda MonkeyVibe', text: 'Camisetas, stickers y gorras con arte de carreta y monos, que solo se compran con MVIBE. Hechas por artistas ticos.', ej: 'Primer drop: 100 camisetas numeradas' },
      { icon: 'qr', chip: 'Idea', kind: 'ide', title: 'Cobro fácil para negocios', text: 'Una app sencilla para que cualquier pulpería o feria genere su QR de cobro en MVIBE, basada en Solana Pay. Sin terminal, solo el celular.', ej: 'Comisión de red: fracciones de centavo' },
      { icon: 'puente', chip: 'Compromiso', kind: '', green: true, title: 'Fondo Mono Verde', text: 'Parte de las comisiones de creador irá a proyectos que instalan puentes de dosel para que los monos crucen calles y cables sin peligro. La organización aliada se anunciará públicamente.', ej: 'Cada aporte se publica con su transacción' },
    ],
    note: '*Montos ilustrativos. El precio real de MVIBE lo define el mercado y puede cambiar mucho.',
  },
  ruta: {
    eyebrow: 'Hoja de ruta', title: 'El sendero, paso a paso',
    intro: 'Fechas estimadas. Avanzamos al siguiente tramo cuando el anterior funciona de verdad, no antes.',
    steps: [
      { now: true, when: 'Q4 2026', title: 'Lanzamiento', items: ['MVIBE sale en pump.fun sobre Solana', 'Logo y nombre visibles en Phantom', 'Canales de comunidad en redes sociales'] },
      { when: 'Q1 2027', title: 'Tropa', items: ['Concursos de memes y arte de carreta', 'Primer drop de la tienda MonkeyVibe', 'Anuncio de la organización del Fondo Mono Verde'] },
      { when: 'Q2 2027', title: 'Primeros comercios', items: ['Piloto con sodas y cafeterías aliadas', 'Tours de avistamiento con guías locales'] },
      { when: '2027 en adelante', title: 'Cobro para todos', items: ['App de cobro con QR para pequeños negocios', 'Expansión a surf y hospedaje en la costa'] },
    ],
  },
  como: {
    eyebrow: 'Cómo conseguirla', title: 'Cuatro pasos y ya tenés MVIBE',
    intro: 'Todo desde el celular. Nadie del equipo te va a pedir tu frase secreta, nunca.',
    steps: [
      ['Instalá Phantom', 'Creá la wallet y guardá tus 12 palabras en papel, lejos del celular.'],
      ['Cargá SOL', ['En Phantom tocá Comprar y pagá con tarjeta. En Costa Rica también podés usar ', { a: 'Binance P2P', href: L.binanceP2P }, ' con SINPE Móvil.']],
      ['Abrí Swap', 'En Phantom tocá Swap, pegá el contrato oficial de MVIBE y elegí cuánto SOL cambiar.'],
      ['Confirmá', 'Revisá el monto, confirmá y MVIBE aparece en tu Phantom en segundos.'],
    ],
    buy: {
      eyebrow: 'Atajo', title: 'Comprá en un toque',
      text: 'Desde el celular, este botón abre Phantom directo en la página de MVIBE. Desde la computadora, escaneá el código con la cámara del celular.',
      open: 'Abrir en Phantom', copy: 'Copiar contrato', copied: 'Contrato copiado', binance: 'Comprar con Binance Wallet ↗', download: 'Descargar QR',
      note: ['¿Ya usás Binance? En la app entrá a ', { b: 'Binance Wallet' }, ', pegá el contrato de MVIBE en el buscador y comprá directo. Verificá que el contrato termine en ', { b: '…FaYpump' }, '.'],
      qrAlt: 'Código QR para comprar MVIBE con Phantom',
    },
    warn: 'Verificá siempre la dirección del contrato en esta página o en nuestros canales oficiales. Hay copias falsas de casi cualquier token.',
  },
  tarjeta: {
    eyebrow: 'Gastá tu MVIBE', title: 'Pagá con tarjeta donde aceptan Visa',
    intro: 'Ninguna tarjeta gasta MVIBE directo todavía. Lo cambiás a USDC y recargás una tarjeta cripto virtual.',
    steps: [
      ['Cambiá a USDC', 'En tu wallet tocá Swap y cambiá MVIBE por USDC en la red Solana.'],
      ['Abrí tu tarjeta', ['Creá una tarjeta virtual en una app cripto disponible en Costa Rica, como ', { a: 'RedotPay', href: L.redotpay }, ' o ', { a: 'Bitget', href: L.bitget }, '.']],
      ['Recargá', 'Enviá USDC desde tu wallet a la dirección de depósito de la tarjeta, siempre por la red Solana.'],
      ['Pagá', 'Agregala a Apple Pay o Google Pay y pagá con el celular.'],
    ],
    warn: 'Las tarjetas son de empresas externas a MonkeyVibe: revisá disponibilidad, comisiones y requisitos en cada app. Probá primero con un monto pequeño.',
  },
  comercios: {
    eyebrow: 'Para negocios', title: '¿Tenés una soda, un tour o un hostal?',
    text: ['Buscamos los primeros comercios aliados. Te ayudamos a crear tu wallet y tu QR de cobro, sin costo de instalación. Escribinos a ', { a: CONFIG.email, href: `mailto:${CONFIG.email}` }, ' y te contactamos.'],
    cta: 'Generar un cobro con QR →',
    receipt: { aria: 'Ejemplo de recibo de cobro', title: 'Ejemplo de cobro', rows: [['Soda La Ceiba', 'Mesa 4'], ['Casado de pollo', '1'], ['Fresco de cas', '1']], total: ['Total', '9.500 MVIBE'], note: 'Recibo ilustrativo de cómo se verá un cobro.' },
  },
  nosotros: {
    eyebrow: 'Sobre nosotros', title: 'Una moneda con alma de selva',
    intro: 'MonkeyVibe es un proyecto pequeño, hecho en Costa Rica, con una idea grande: que la tecnología también sirva para cuidar lo que hace único a este país.',
    storyTitle: 'Cómo nació MonkeyVibe',
    story: [
      'En Costa Rica es normal ver una tropa de monos cruzando por los cables de luz para llegar al otro lado de la calle. Es una escena linda, pero también peligrosa: muchos no lo logran.',
      'Al mismo tiempo, miles de turistas y ticos pagan todos los días en sodas, tours y escuelas de surf, y muchos pequeños negocios todavía no tienen datáfono ni formas modernas de cobrar.',
      'En octubre de 2026 juntamos esas dos ideas. Así nació MonkeyVibe: una moneda comunitaria sobre Solana para pagar con buena vibra, y Douglas, nuestro mono de lentes y corona, como su cara. Detrás de cada MVIBE hay una promesa simple: que una parte de lo que genera el proyecto ayude a construir puentes para que los monos crucen seguros.',
    ],
    sceneAria: 'Ilustración: volcán, selva y un mono cruzando un puente de dosel en Costa Rica',
    cards: [
      { icon: 'mision', title: 'Misión', text: 'Que pagar con cripto en Costa Rica sea tan fácil como un SINPE, y que cada pago deje algo bueno para la fauna y los negocios locales.' },
      { icon: 'objetivo', title: 'Objetivo', text: 'Para 2027, tener comercios aliados cobrando con MVIBE, guías de tours locales en la red y la primera donación pública del Fondo Mono Verde.' },
      { icon: 'valores', title: 'Valores', text: 'Transparencia en cada movimiento, comunidad antes que especulación, y mucha Pura Vida.' },
    ],
    contact: { eyebrow: 'Contacto', title: '¿Querés sumarte, aliarte o preguntar algo?', text: 'Escribinos y te respondemos con gusto.', copy: 'Copiar correo', copied: 'Copiado' },
  },
  footer: {
    name: 'MonkeyVibe ($MVIBE)', made: 'Hecho en Costa Rica, con café y paciencia. Pura vida.', contact: 'Contacto:',
    legal: 'MVIBE es un token meme comunitario. No representa acciones ni derecho a ganancias, y su precio puede subir o bajar a cero. Esto no es asesoría financiera.',
    credit: 'Elaborado por',
  },
};
