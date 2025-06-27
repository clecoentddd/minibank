// app/slices/08_BlacklistCustomerView/projection.js
import { readModelStoreGet } from "@/shared/infrastructure/readModelStore";

export function getBlockedCustomers() {
  return readModelStoreGet("blockedCustomers");
}