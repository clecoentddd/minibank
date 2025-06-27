"use client";

// Make sure this is imported at the top level of your UI app
import "./slices/02_ViewUnverifiedCustomers/eventHandler";
import "./slices/04_ViewVerifiedCustomers/eventHandler";
import "./slices/06_ViewAccount/eventHandler";
import "./slices/07_TranslatingCustomerBlockedInterface/listener";
import "./slices/08_BlacklistCustomerView/eventHandler";
import "./slices/09_BlockAccount/eventHandler";
import "./slices/10_ProjectBlockedAccounts/eventHandler";
import "./slices/05_CreateAccount/automation";

export default function EventHandlersClient() {
  return null; // nothing rendered, only side effects
}