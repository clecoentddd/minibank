import { appendEvent } from "../../shared/infrastructure/eventStore"; // use relative path if needed
import { publish } from "../../shared/infrastructure/pubsub";
import { AccountCreated } from "./events";

let accountIdCounter = 1;

export function handleCreateAccount(command) {
  const accountId = accountIdCounter++;
  const event = AccountCreated(accountId, command.payload.customerId);

  appendEvent(event);
  publish(event.type, event);
}