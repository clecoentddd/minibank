// app/slices/09_BlockAccount/commandHandler.js
import { appendEvent, getEventsByAggregateId } from "@/shared/infrastructure/eventStore";
import { AccountBlocked } from "./events";
import { blockAccount } from "./commands";
import { publish } from "../../shared/infrastructure/pubsub";

export function handleBlockAccount(command) {
  const { accountId } = command.payload;

  // Replay events to check if account is already blocked
  const pastEvents = getEventsByAggregateId(accountId);
  const alreadyBlocked = pastEvents.some(e => e.type === "AccountBlocked");

  if (alreadyBlocked) {
    console.log(`[BLOCK ACCOUNT] Account ${accountId} is already blocked.`);
    return;
  }

  const event = AccountBlocked(accountId);
  console.log("[BLOCK ACCOUNT] Appending event:", event);
  appendEvent(event);

  publish(event.type,event);
}