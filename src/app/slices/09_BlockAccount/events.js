// app/slices/09_BlockAccount/events.js
export function AccountBlocked(accountId) {
  return {
    type: "AccountBlocked",
    payload: {
      accountId,
      accountStatus: "blocked",
    },
  };
}