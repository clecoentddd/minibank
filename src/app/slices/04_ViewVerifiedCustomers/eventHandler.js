import { subscribe } from "../../shared/infrastructure/pubsub";
import { readModelStoreUpdate } from "../../shared/infrastructure/readModelStore";

subscribe("CustomerVerified", (event) => {
  console.log("[04 Projection] Adding verified:", event.payload);

  readModelStoreUpdate("verifiedCustomers", (state) => [
    ...state,
    {
      id: event.payload.id,
      name: event.payload.name,
      customerStatus: "verified",
    },
  ]);
});

// Remove from "unverifiedCustomers"
import { readModelStoreUpdate as updateUnverified } from "../../shared/infrastructure/readModelStore";

subscribe("CustomerVerified", (event) => {
  console.log("[04 Projection] Removing from unverified:", event.payload);
  updateUnverified("unverifiedCustomers", (state) =>
    state.filter((c) => c.id !== event.payload.id)
  );
});