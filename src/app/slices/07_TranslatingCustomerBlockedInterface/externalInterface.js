import { publish } from "../../shared/infrastructure/pubsub";

export function simulateExternalBlacklist(name) {
  const event = {
    type: "CustomerHasBeenBlacklisted",
    payload: { name },
  };
  console.log("[07 External] Simulating external event:", event);
  publish(event.type, event);
}