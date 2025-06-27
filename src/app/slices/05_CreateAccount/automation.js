import { subscribe } from "../../shared/infrastructure/pubsub";
import { createAccount } from "./commands";
import { handleCreateAccount } from "./commandHandler";

console.log("[05_CreateAccount] Subscribing to CustomerVerified events");

subscribe("CustomerVerified", (event) => {
  console.log("[05_CreateAccount] Received CustomerVerified event:", event);

  const command = createAccount(event.payload.id);
  console.log("[05_CreateAccount] Created createAccount command:", command);

  handleCreateAccount(command);

  console.log("[05_CreateAccount] handleCreateAccount called");
});