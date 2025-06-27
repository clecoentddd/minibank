// app/slices/08_BlacklistCustomerView/eventHandler.js
import { subscribe } from "@/shared/infrastructure/pubsub";
import { readModelStoreGet, readModelStoreUpdate } from "@/shared/infrastructure/readModelStore";

subscribe("CustomerBlacklisted", (event) => {
  console.log("[08] CustomerBlacklisted event received:", event);

  const blacklistedCustomers = readModelStoreGet("blacklistedCustomers") || [];

  // Prevent duplicates if customer already blacklisted
  const exists = blacklistedCustomers.some(c => c.id === event.payload.id);
  if (exists) {
    console.log(`[08] Customer ID ${event.payload.id} already blacklisted, skipping.`);
    return;
  }

  const { id } = event.payload;  
  // Add new blacklisted customer to read model
  readModelStoreUpdate("blacklistedCustomers", (prev) => [
    ...prev,
    {
      id: id,
      name: event.payload.name,
      customerStatus: event.payload.customerStatus,
    },
  ]);

    // update verified customers to blaklisted
   readModelStoreUpdate("verifiedCustomers", (state) =>
    state.map((c) =>
      c.id === id ? { ...c, customerStatus: "blacklisted" } : c
    )
  );

  // update verified customers to blaklisted
   readModelStoreUpdate("unverifiedCustomers", (state) =>
    state.map((c) =>
      c.id === id ? { ...c, customerStatus: "blacklisted" } : c
    )
  );
});