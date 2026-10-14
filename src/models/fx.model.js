/** Tipo de cambio colón/dólar de referencia, con límites razonables. */
import { CONFIG } from '../config.js';
import { getJSON } from '../core/http.js';

export async function fetchCrcPerUsd() {
  const data = await getJSON(CONFIG.api.fx, { timeout: CONFIG.timeoutMs });
  const rate = Number(data?.rates?.CRC);
  return Number.isFinite(rate) && rate > 300 && rate < 1500 ? rate : null;
}
