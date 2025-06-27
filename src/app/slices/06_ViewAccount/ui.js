import React from "react";
import { useReadModel } from "../../shared/hooks/useReadModel";
import "./styles.css";

export default function ViewAccount() {
  const accounts = useReadModel("accounts");

  return (
    <div className="accounts-container">
      <h2>Accounts</h2>
      {accounts.length === 0 ? (
        <p>No accounts created yet.</p>
      ) : (
        <table className="accounts-table">
          <thead>
            <tr>
              <th>Account ID</th>
              <th>Customer ID</th>
               <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map(({ id, customerId , accountStatus }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{customerId}</td>
                <td>{accountStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
