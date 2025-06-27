// app/slices/01_CreateCustomer/events.js
export function CustomerCreated(id, name) {

  return {
   type: "CustomerUnverified",
   payload: { id, name, customerStatus: "unverified" },
  };
  
}
