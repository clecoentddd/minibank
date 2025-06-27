// app/slices/01_CreateCustomer/commands.js
export function createCustomer(name) {
  return {
    payload: {
      name,
      customerStatus: "unverified", // Explicitly assign initial status
    },
  };
}