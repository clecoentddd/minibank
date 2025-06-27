// app/slices/05_CreateAccount/commands.js
export function createAccount(customerId) {
  return { type: "CreateAccount", payload: { customerId } };
}