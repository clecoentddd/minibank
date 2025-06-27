// app/slices/02_ViewUnverifiedCustomers/projection.js
import { readModelStoreGet } from "../../shared/infrastructure/readModelStore";

export function getUnverifiedCustomers() {
  return readModelStoreGet("unverifiedCustomers");
}