/**
 * fetch seguro para APIs públicas:
 * tiempo máximo, sin cookies, sin referrer y solo respuestas JSON.
 */
export async function getJSON(url, { timeout = 8000 } = {}) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal, cache: 'no-store', credentials: 'omit', referrerPolicy: 'no-referrer', mode: 'cors',
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    if (!(res.headers.get('content-type') || '').includes('json')) throw new Error('Respuesta no JSON');
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}
