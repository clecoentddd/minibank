// app/slices/07_TranslatingCustomerBlockedInterface/events.js

export function CustomerBlacklisted(id, name) {
  const customerStatus = "blacklisted";  // define variable

  return {
    type: "CustomerBlacklisted",
    customerStatus,                      // this is optional if you want it at the root level
    payload: { id, name, customerStatus },  // use the defined variable here
  };
}