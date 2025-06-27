// app/slices/07_TranslatingCustomerBlockedInterface/commandHandler.js
import { appendEvent, getEventsByAggregateId } from "@/shared/infrastructure/eventStore";
import { CustomerBlacklisted } from "./events";
import { getVerifiedCustomers } from "../04_ViewVerifiedCustomers/projection";
import { getUnverifiedCustomers } from "../02_ViewUnverifiedCustomers/projection";
import {publish} from "../../shared/infrastructure/pubsub";

export function handleBlockCustomer(command) {
  // Find customer by name among verified and unverified customers
  const customers = [...getVerifiedCustomers(), ...getUnverifiedCustomers()];
  const customer = customers.find(c => c.name === command.payload.name);
  if (!customer) {
    console.warn(`No matching customer found with name "${command.payload.name}"`);
    return;
  }

  // Replay events for this customer to check if already blacklisted
  const pastEvents = getEventsByAggregateId(customer.id);

  const alreadyBlacklisted = pastEvents.some(event => event.type === "CustomerBlacklisted");
  if (alreadyBlacklisted) {
    console.log(`Customer ${customer.name} (id ${customer.id}) is already blacklisted; skipping.`);
    return;
  }

  // Append and publish CustomerBlacklisted event
  const event = CustomerBlacklisted(customer.id, customer.name);
  appendEvent(event);

  publish(event.type, event);
}