// app/slices/09_BlockAccount/eventHandler.js
import { subscribe } from "@/shared/infrastructure/pubsub";
import { handleBlockAccount } from "./commandHandler";
import { blockAccount } from "./commands";
import { readModelStoreGet } from "@/shared/infrastructure/readModelStore";

// On CustomerBlacklisted → block all accounts for that customer
subscribe("CustomerBlacklisted", (event) => {
  const { id: customerId } = event.payload;
  const accounts = readModelStoreGet("accounts");

  const customerAccounts = accounts.filter(acc => acc.customerId === customerId);

  if (customerAccounts.length === 0) {
    console.log(`[BLOCK ACCOUNT] No accounts found for customer ${customerId}`);
    return;
  }

  customerAccounts.forEach(({ id: accountId }) => {
    console.log(`[BLOCK ACCOUNT] Blocking account ${accountId} for customer ${customerId}`);
    handleBlockAccount(blockAccount(accountId));
  });
});