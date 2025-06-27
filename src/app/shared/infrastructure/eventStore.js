// app/shared/infrastructure/eventStore.js
export const eventStore = [];

export function appendEvent(event) {
  console.log("[EVENT STORE] Appending:", event);
  eventStore.push({ ...event, timestamp: Date.now() });
}

export function getEventsByType(type) {
  return eventStore.filter((e) => e.type === type);
}

export function getAllEvents() {
  return [...eventStore];
}

// New function to get all events for a given aggregate id
export function getEventsByAggregateId(id) {
  return eventStore.filter(event => event.payload?.id === id);
}