// app/slices/07_TranslatingCustomerBlockedInterface/events.js

export function CustomerBlacklisted(id, name) {
  const customerStatus = "blacklisted";  // define variable

  return {
    type: "CustomerBlacklisted",
    payload: { id, name, customerStatus },  // use the defined variable here
  };
}