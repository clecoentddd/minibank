// app/slices/01_CreateCustomer/commandHandler.js
import { appendEvent } from "../../shared/infrastructure/eventStore";
import { publish } from "../../shared/infrastructure/pubsub";
import { CustomerCreated } from "./events"; // use this instead
import { createCustomer } from "./commands";

let customerIdCounter = 1;

export function handleCreateCustomer(name) {
  const id = customerIdCounter++;
  const command = createCustomer(name);
  console.log("[COMMAND] createCustomer:", command);

  const event = CustomerCreated(id, command.payload.name);
  console.log("[EVENT] CustomerUnverified:", event);

  appendEvent(event);
  publish(event.type, event);
}