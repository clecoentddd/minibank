"use client";

import React from "react";
import EventHandlersClient from "./EventHandlersClient";

import CreateCustomerForm from "./slices/01_CreateCustomer/ui";
import UnverifiedCustomerList from "./slices/02_ViewUnverifiedCustomers/ui";
import VerifyCustomerList from "./slices/03_VerifyCustomer/ui";
import VerifiedCustomerList from "./slices/04_ViewVerifiedCustomers/ui";
import AccountList from "./slices/06_ViewAccount/ui";
import ExternalBlacklistUI from "./slices/07_TranslatingCustomerBlockedInterface/ui";
import BlacklistedCustomerList from "./slices/08_BlacklistCustomerView/ui";

import "./styles.css"; // Optional if you want to centralize styling

export default function Home() {
  return (
    <main style={{ padding: "1rem" }}>
      <h1>Event Modeling Demo</h1>
      <EventHandlersClient />

      {/* 🔲 External simulation UI at the top */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>External Blacklist Simulation</h2>
        <ExternalBlacklistUI />
      </section>

      {/* 🔳 Divider */}
      <hr style={{ margin: "2rem 0" }} />

      {/* 🧱 Two-column layout */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
        {/* 🧩 Left: Customers */}
        <div style={{ flex: 1 }}>
          <h2>Customers</h2>
          <CreateCustomerForm />
          <UnverifiedCustomerList />
          <VerifyCustomerList />
          <VerifiedCustomerList />
        </div>

        {/* 🧩 Right: Accounts + Blacklist */}
        <div style={{ flex: 1 }}>
          <h2>Accounts</h2>
          <AccountList />
          <h2>Blacklisted Customers</h2>
          <BlacklistedCustomerList />
        </div>
      </div>
    </main>
  );
}
