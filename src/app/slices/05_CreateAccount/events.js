export function AccountCreated(accountId, customerId) {
  return {
    type: "AccountCreated",
    payload: {
      accountId,
      customerId,
      accountStatus: "opened"
    }
  };
}
