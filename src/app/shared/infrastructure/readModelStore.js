const store = {};
const listeners = {};

export function readModelStoreGet(key) {
  console.log(`[STORE] Get read model for '${key}':`, store[key] || []);
  return store[key] || [];
}

export function readModelStoreUpdate(key, updaterFn) {
  const prev = store[key] || [];
  const updated = updaterFn(prev);
  store[key] = updated;

  console.log(`[STORE] Updated '${key}' read model:`, updated);

  if (listeners[key]) {
    console.log(`[STORE] Notifying ${listeners[key].length} subscribers for '${key}'`);
    listeners[key].forEach((cb) => cb(updated));
  } else {
    console.log(`[STORE] No listeners registered for '${key}'`);
  }
}

export function readModelSubscribe(key, callback) {
  if (!listeners[key]) {
    listeners[key] = [];
  }
  listeners[key].push(callback);
  console.log(`[STORE] Subscribed to '${key}' read model (total: ${listeners[key].length})`);

  // Trigger initial state immediately
  callback(store[key] || []);

  return () => {
    listeners[key] = listeners[key].filter((cb) => cb !== callback);
    console.log(`[STORE] Unsubscribed from '${key}' read model`);
  };
}

