import "./styles.css";
import { useReadModel } from "../../shared/hooks/useReadModel";

export default function UnverifiedCustomerList() {
  const customers = useReadModel("unverifiedCustomers");

  return (
    <div className="unverified-container">
      <h2 className="unverified-title">Unverified Customers</h2>
      <ul className="unverified-list">
        {customers.map((c) => (
          <li key={c.id} className="unverified-item">
            <strong>ID:</strong> {c.id} — <strong>Name:</strong> {c.name} — <strong>Status:</strong> {c.customerStatus}
          </li>
        ))}
        {customers.length === 0 && (
          <li className="unverified-empty">No unverified customers.</li>
        )}
      </ul>
    </div>
  );
}