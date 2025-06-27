// slices/03_VerifyCustomer/events.js
export function CustomerVerified(id, name) {
  return {
    type: "CustomerVerified",
    payload: { id, name }, // name must be here!
  };
}