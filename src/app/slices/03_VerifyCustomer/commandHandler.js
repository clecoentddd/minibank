import { appendEvent } from "../../shared/infrastructure/eventStore";
import { publish } from "../../shared/infrastructure/pubsub";
import { replayCustomerEvents } from "../../aggregates/customerAggregate";
import { CustomerVerified } from "./events";

export function handleVerifyCustomer(command) {
  const { id } = command.payload;
  const customer = replayCustomerEvents(id);

  // Business rules inside slice 03:
  if (customer.status === "verified") {
    console.warn("Customer already verified");
    return;
  }
  if (customer.status === "blacklisted") {
    console.warn("Customer is blacklisted, cannot verify");
    return;
  }

  const event = CustomerVerified(id, customer.name);
  appendEvent(event);
  publish(event.type, event);
}