import React from "react";
import { useReadModel } from "../../shared/hooks/useReadModel";
import "./styles.css";

export default function VerifiedCustomers() {
  const verifiedCustomers = useReadModel("verifiedCustomers");

  return (
    <div className="verified-customers">
      <h2>Verified Customers</h2>
      {verifiedCustomers.length === 0 ? (
        <p>No verified customers yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {verifiedCustomers.map(({ id, name, customerStatus }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{customerStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}