// app/slices/07_TranslatingCustomerBlockedInterface/commands.js

export function blockCustomerByName(name) {
  return {
    type: "BlockCustomerByName",
    payload: { name },
  };
}