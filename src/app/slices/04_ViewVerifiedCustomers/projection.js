// app/slices/04_ViewVerifiedCustomers/projection.js
import { readModelStoreGet } from "@/shared/infrastructure/readModelStore";

export function getVerifiedCustomers() {
  return readModelStoreGet("verifiedCustomers");
}