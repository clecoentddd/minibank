// app/slices/02_ViewUnverifiedCustomers/eventHandler.js
import { subscribe } from "../../shared/infrastructure/pubsub";
import { readModelStoreUpdate } from "../../shared/infrastructure/readModelStore";

subscribe("CustomerUnverified", (event) => {
  console.log(
    `[PROJECTION] Handling CustomerUnverified event: { id: ${event.payload.id}, name: "${event.payload.name}", status: "${event.payload.customerStatus} }`
  );

  readModelStoreUpdate("unverifiedCustomers", (state = []) => {
    const updated = [
      ...state,
      { id: event.payload.id, name: event.payload.name, customerStatus: event.payload.customerStatus },
    ];
    console.log(
      `[PROJECTION] Updated unverifiedCustomers projection: ${JSON.stringify(updated)}`
    );
    return updated;
  });
});