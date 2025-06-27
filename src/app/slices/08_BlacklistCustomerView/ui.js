import React from "react";
import { useReadModel } from "../../shared/hooks/useReadModel";
import "./styles.css";

export default function BlacklistedCustomerList() {
  const blacklistedCustomers = useReadModel("blacklistedCustomers") || [];

  return (
    <div className="blacklist-container">
      <h2>Blacklisted Customers</h2>
      {blacklistedCustomers.length === 0 ? (
        <p>No customers are blacklisted.</p>
      ) : (
        <ul className="blacklist-list">
          {blacklistedCustomers.map(({ id, name, customerStatus }) => (
            <li key={id} className="blacklist-item">
            <strong>{name}</strong> (ID: {id}, Status: {customerStatus})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}