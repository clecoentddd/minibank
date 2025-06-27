// app/slices/07_TranslatingCustomerBlockedInterface/listener.js

import { subscribe } from "@/shared/infrastructure/pubsub";
import { blockCustomerByName } from "./commands";
import { handleBlockCustomer } from "./commandHandler";

subscribe("CustomerHasBeenBlacklisted", (event) => {
  console.log("[07 Listener] External event received:", event.payload);

  const command = blockCustomerByName(event.payload.name);
  console.log("[07 Listener] Generated command from external event:", command);

  handleBlockCustomer(command);
});