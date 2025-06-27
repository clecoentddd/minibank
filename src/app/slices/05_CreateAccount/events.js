// app/slices/05_CreateAccount/events.js
export function AccountCreated(accountId, customerId) {
  return { type: "AccountCreated", payload: { accountId, customerId } };
}