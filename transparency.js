/**
 * DATOS PÚBLICOS DE TRANSPARENCIA
 * ─────────────────────────────────
 * 1) Pegá aquí la dirección pública del Fondo Mono Verde (las que empiezan con letras y números, 32–44 caracteres).
 *    Nunca pongas aquí tu frase secreta ni claves privadas: solo direcciones públicas.
 * 2) Cada donación del Fondo Mono Verde se agrega a DONATIONS con su firma de transacción.
 */
export const WALLETS = [
  { id: 'fondo', role: 'fund', address: '' }, // Wallet exclusiva del Fondo Mono Verde
];

export const DONATIONS = [
  // Ejemplo de formato (borrá las barras // para activarlo):
  // { date: '2027-01-15', org: 'Nombre de la organización', amountUsd: 50, tx: 'FirmaDeLaTransaccion...' },
];
