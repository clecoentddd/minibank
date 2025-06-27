// app/slices/03_VerifyCustomer/commands.js
export function verifyCustomer(id) {
  return { type: "VerifyCustomer", payload: { id } };
}