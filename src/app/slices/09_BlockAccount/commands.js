// app/slices/09_BlockAccount/commands.js
export function blockAccount(accountId) {
  return { type: "BlockAccount", payload: { accountId } };
}