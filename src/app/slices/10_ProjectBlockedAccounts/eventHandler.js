// app/slices/10_ProjectBlockedAccounts/eventHandler.js
import { subscribe } from "@/shared/infrastructure/pubsub";
import { readModelStoreUpdate } from "@/shared/infrastructure/readModelStore";

subscribe("AccountBlocked", (event) => {
  const { accountId } = event.payload;

  console.log(`[PROJECTION] Blocking account in read model: ${accountId}`);

  readModelStoreUpdate("accounts", (accounts) =>
    accounts.map((account) =>
      account.id === accountId
        ? { ...account, accountStatus: "blocked" }
        : account
    )
  );
});