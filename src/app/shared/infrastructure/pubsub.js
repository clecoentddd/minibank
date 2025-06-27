// Simple in-memory pub/sub system with logging
const subscribers = {};

export function subscribe(eventType, callback) {
  if (!subscribers[eventType]) {
    subscribers[eventType] = [];
    console.log(`[PUBSUB] Subscribing to event type: ${eventType}`);
  }
  subscribers[eventType].push(callback);
  console.log(`[PUBSUB] Handler added for ${eventType} (total: ${subscribers[eventType].length})`);
}

export function publish(eventType, event) {
  const handlers = subscribers[eventType];
  if (!handlers || handlers.length === 0) {
    console.warn(`[PUBSUB] No subscribers for event type: ${eventType}`);
    return;
  }

  console.log(`[PUBSUB] Publishing event of type ${eventType} to ${handlers.length} subscriber(s)`);
  handlers.forEach((callback, index) => {
    try {
      console.log(`[PUBSUB] Executing subscriber #${index + 1} for ${eventType}`);
      callback(event);
    } catch (err) {
      console.error(`[PUBSUB] Error in subscriber for ${eventType}:`, err);
    }
  });
}
