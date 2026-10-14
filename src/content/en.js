/** English content. Same shape as es.js. */
import { CONFIG } from '../config.js';
const L = CONFIG.links;

export default {
  meta: {
    title: 'MonkeyVibe ($MVIBE) · Pura Vida on Solana',
    description: 'MonkeyVibe ($MVIBE): Pura Vida community token on Solana, made in Costa Rica.',
  },
  nav: {
    home: 'MonkeyVibe home', menu: 'Menu', langBtn: 'ES', langAria: 'Cambiar a español',
    items: [['#comprar', 'Buy'], ['#usos', 'Where to pay'], ['#ruta', 'Roadmap'], ['#como', 'How to get it'],
      ['#comercios', 'Businesses'], [L.cobrar, 'Get paid'], ['#nosotros', 'About us']],
  },
  hero: {
    eyebrow: '$MVIBE · community token on Solana',
    h1a: 'Money with jungle vibes.', h1b: 'Pura Vida.',
    lead: 'MonkeyVibe was born in Costa Rica to pay for your coffee, your tour and your surfboard with a coin that moves as fast as a howler monkey through the treetops.',
    ctaBuy: 'Buy MVIBE here →', ctaPhantom: 'Buy with Phantom →', ctaHow: 'How to buy', ctaUses: 'See where it will work',
    contract: 'Contract:', copy: 'Copy', copied: 'Copied', viewPump: 'View on pump.fun ↗',
    wheelAria: 'Costa Rican painted oxcart wheel turned into a coin', logoAlt: 'MonkeyVibe coin logo',
  },
  ficha: [['Network', 'Solana'], ['Ticker', '$MVIBE'], ['Supply', '1,000,000,000'], ['Launch', 'pump.fun']],
  comprar: {
    eyebrow: 'Direct purchase', title: 'Buy MVIBE right here',
    intro: 'Connect your wallet, choose how much SOL to use and you are done. The purchase happens straight from your wallet: this page never holds your money.',
    steps: [
      ['1', 'Connect your wallet', 'Phantom, Solflare or another Solana wallet. On your phone, open this page inside your wallet browser.'],
      ['2', 'Enter how much SOL to use', 'The widget instantly shows how many MVIBE you get.'],
      ['3', 'Tap Swap and confirm', 'MVIBE shows up in your wallet in seconds.'],
      ['!', 'Start small', 'MVIBE price moves a lot. Only buy what you can afford to lose.'],
    ],
    fbTitle: 'The buy widget did not load here.', fbText: 'You can still buy with these options:',
    fbJup: 'Buy on Jupiter ↗', fbPump: 'Buy on pump.fun ↗',
  },
  precio: {
    live: 'Live', title: 'MVIBE price now', loading: 'Loading data…',
    labels: ['Price', '24h change', 'Market cap', '24h volume'],
    note: 'The price changes by the minute and can fall as well as rise. This is not financial advice. Data from ',
    source: 'DexScreener', chartTitle: 'MVIBE chart',
    updated: 'Updated', empty: 'No trades indexed yet', error: 'Could not load data. Retrying…',
  },
  usos: {
    eyebrow: 'Projects on the way', title: 'Where you will be able to pay with MVIBE',
    intro: 'These are the uses we are building. Each card shows its real stage: anything still in talks is not a done deal.',
    items: [
      { icon: 'cafe', chip: 'In talks', kind: 'con', title: 'Partner sodas and cafés', text: 'Pay for a casado (the classic Tico lunch plate) or a pour-over coffee by scanning a QR code with Phantom. The shop gets paid instantly.', ej: 'E.g. casado + fresh juice · 9,500 MVIBE*' },
      { icon: 'mono', chip: 'In design', kind: 'dis', title: 'Monkey-watching tours', text: 'Local guides in places like Manuel Antonio, Cahuita and Tortuguero charging for wildlife tours in MVIBE, with discounts for holders.', ej: 'Goal: 3 pilot guides in year one' },
      { icon: 'surf', chip: 'Idea', kind: 'ide', title: 'Surf and stays', text: 'Hostels and surf schools on the Pacific coast accepting MVIBE for lessons, board rentals and nights.', ej: 'Areas: Santa Teresa · Nosara · Dominical' },
      { icon: 'camisa', chip: 'In design', kind: 'dis', title: 'MonkeyVibe Shop', text: 'T-shirts, stickers and caps with oxcart art and monkeys, sold only for MVIBE. Made by Costa Rican artists.', ej: 'First drop: 100 numbered tees' },
      { icon: 'qr', chip: 'Idea', kind: 'ide', title: 'Easy payments for businesses', text: 'A simple app so any corner store or farmers market can create its own MVIBE payment QR, built on Solana Pay. No terminal, just a phone.', ej: 'Network fee: fractions of a cent' },
      { icon: 'puente', chip: 'Commitment', kind: '', green: true, title: 'Green Monkey Fund', text: 'Part of the creator fees will go to projects that build canopy bridges so monkeys can cross roads and power lines safely. The partner organization will be announced publicly.', ej: 'Every donation is published with its transaction' },
    ],
    note: '*Illustrative amounts. The real price of MVIBE is set by the market and can change a lot.',
  },
  ruta: {
    eyebrow: 'Roadmap', title: 'The trail, step by step',
    intro: 'Estimated dates. We move to the next stretch only when the previous one truly works.',
    steps: [
      { now: true, when: 'Q4 2026', title: 'Launch', items: ['MVIBE launches on pump.fun on Solana', 'Logo and name visible in Phantom', 'Community channels on social media'] },
      { when: 'Q1 2027', title: 'Troop', items: ['Meme and oxcart-art contests', 'First MonkeyVibe Shop drop', 'Green Monkey Fund partner announced'] },
      { when: 'Q2 2027', title: 'First businesses', items: ['Pilot with partner sodas and cafés', 'Wildlife tours with local guides'] },
      { when: '2027 and beyond', title: 'Payments for everyone', items: ['QR payment app for small businesses', 'Expansion to surf and coastal stays'] },
    ],
  },
  como: {
    eyebrow: 'How to get it', title: 'Four steps and you own MVIBE',
    intro: 'All from your phone. Nobody on the team will ever ask for your secret phrase.',
    steps: [
      ['Install Phantom', 'Create your wallet and write your 12 words on paper, away from your phone.'],
      ['Add SOL', ['In Phantom tap Buy and pay by card. In Costa Rica you can also use ', { a: 'Binance P2P', href: L.binanceP2P }, ' with SINPE Móvil.']],
      ['Open Swap', 'In Phantom tap Swap, paste the official MVIBE contract and choose how much SOL to swap.'],
      ['Confirm', 'Check the amount, confirm, and MVIBE shows up in your Phantom in seconds.'],
    ],
    buy: {
      eyebrow: 'Shortcut', title: 'Buy in one tap',
      text: 'On your phone, this button opens Phantom right on the MVIBE page. On a computer, scan the code with your phone camera.',
      open: 'Open in Phantom', copy: 'Copy contract', copied: 'Contract copied', binance: 'Buy with Binance Wallet ↗', download: 'Download QR',
      note: ['Already on Binance? In the app open ', { b: 'Binance Wallet' }, ', paste the MVIBE contract in the search bar and buy directly. Check that the contract ends in ', { b: '…FaYpump' }, '.'],
      qrAlt: 'QR code to buy MVIBE with Phantom',
    },
    warn: 'Always check the contract address on this page or our official channels. Fake copies exist for almost every token.',
  },
  tarjeta: {
    eyebrow: 'Spend your MVIBE', title: 'Pay by card wherever Visa is accepted',
    intro: 'No card spends MVIBE directly yet. Swap it to USDC and top up a virtual crypto card.',
    steps: [
      ['Swap to USDC', 'In your wallet tap Swap and change MVIBE to USDC on the Solana network.'],
      ['Open your card', ['Create a virtual card in a crypto app available in Costa Rica, such as ', { a: 'RedotPay', href: L.redotpay }, ' or ', { a: 'Bitget', href: L.bitget }, '.']],
      ['Top up', 'Send USDC from your wallet to the card deposit address, always on the Solana network.'],
      ['Pay', 'Add it to Apple Pay or Google Pay and pay with your phone.'],
    ],
    warn: 'Cards are offered by companies outside MonkeyVibe: check availability, fees and requirements in each app. Try a small amount first.',
  },
  comercios: {
    eyebrow: 'For businesses', title: 'Run a soda, a tour or a hostel?',
    text: ['We are looking for our first partner businesses. We will help you set up your wallet and payment QR at no setup cost. Write to us at ', { a: CONFIG.email, href: `mailto:${CONFIG.email}` }, ' and we will get in touch.'],
    cta: 'Create a QR payment request →',
    receipt: { aria: 'Sample payment receipt', title: 'Sample payment', rows: [['Soda La Ceiba', 'Table 4'], ['Chicken casado', '1'], ['Cas fruit juice', '1']], total: ['Total', '9,500 MVIBE'], note: 'Illustrative receipt of what a payment will look like.' },
  },
  nosotros: {
    eyebrow: 'About us', title: 'A coin with a jungle soul',
    intro: 'MonkeyVibe is a small project made in Costa Rica with a big idea: that technology can also help protect what makes this country unique.',
    storyTitle: 'How MonkeyVibe was born',
    story: [
      'In Costa Rica it is common to see a troop of monkeys crossing the power lines to reach the other side of the road. It is a beautiful sight, but also a dangerous one: many do not make it.',
      'At the same time, thousands of tourists and locals pay every day at sodas, tours and surf schools, and many small businesses still have no card terminal or modern way to get paid.',
      'In October 2026 we brought those two ideas together. That is how MonkeyVibe was born: a community coin on Solana to pay with good vibes, with Douglas, our monkey with sunglasses and a crown, as its face. Behind every MVIBE there is a simple promise: part of what the project generates helps build bridges so monkeys can cross safely.',
    ],
    sceneAria: 'Illustration: volcano, rainforest and a monkey crossing a canopy bridge in Costa Rica',
    cards: [
      { icon: 'mision', title: 'Mission', text: 'Make paying with crypto in Costa Rica as easy as a SINPE transfer, with every payment leaving something good for wildlife and local businesses.' },
      { icon: 'objetivo', title: 'Goal', text: 'By 2027, have partner businesses accepting MVIBE, local tour guides on the network and the first public donation from the Green Monkey Fund.' },
      { icon: 'valores', title: 'Values', text: 'Transparency in every transaction, community before speculation, and plenty of Pura Vida.' },
    ],
    contact: { eyebrow: 'Contact', title: 'Want to join, partner up or ask something?', text: 'Write to us and we will gladly reply.', copy: 'Copy email', copied: 'Copied' },
  },
  footer: {
    name: 'MonkeyVibe ($MVIBE)', made: 'Made in Costa Rica with coffee and patience. Pura vida.', contact: 'Contact:',
    legal: 'MVIBE is a community meme token. It is not equity and gives no right to profits, and its price can rise or fall to zero. This is not financial advice.',
    credit: 'Made by',
  },
};
