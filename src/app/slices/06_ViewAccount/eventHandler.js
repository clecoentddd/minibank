import { subscribe } from "../../shared/infrastructure/pubsub";
import { readModelStoreUpdate } from "../../shared/infrastructure/readModelStore";

console.log("[06_ViewAccount] Subscribing to AccountCreated events");

subscribe("AccountCreated", (event) => {
  console.log("[06_ViewAccount] Received AccountCreated event:", event.payload);

  readModelStoreUpdate("accounts", (state) => [
    ...state,
    {
      id: event.payload.accountId,
      customerId: event.payload.customerId,
      accountStatus: event.payload.accountStatus,
    },
  ]);
});