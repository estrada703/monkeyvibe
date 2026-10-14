/** Estado global mínimo con suscripción (patrón observador). */
export function createStore(initial) {
  let state = Object.freeze({ ...initial });
  const subs = new Set();
  return {
    get: () => state,
    set(patch) {
      state = Object.freeze({ ...state, ...patch });
      subs.forEach((fn) => fn(state));
    },
    subscribe(fn) { subs.add(fn); return () => subs.delete(fn); },
  };
}
