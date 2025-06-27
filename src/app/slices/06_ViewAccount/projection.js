// app/slices/06_ViewAccount/projection.js
import { readModelStoreGet } from "@/shared/infrastructure/readModelStore";

export function getAccounts() {
  return readModelStoreGet("accounts");
}