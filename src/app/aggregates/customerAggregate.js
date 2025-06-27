import { getEventsByAggregateId } from "../shared/infrastructure/eventStore";

export function replayCustomerEvents(id) {
  const events = getEventsByAggregateId(id);
  let state = { id, name: null, customerStatus: "unknown" };

  for (const event of events) {
    switch (event.type) {
      case "CustomerUnverified":
        state.name = event.payload.name;
        state.customerStatus= "unverified";
        break;
      case "CustomerVerified":
        state.customerStatus= "verified";
        break;
      case "CustomerBlacklisted":
        state.customerStatus = "blacklisted";
        break;
    }
  }

  return state;
}