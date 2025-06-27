// app/slices/01_CreateCustomer/ui.js
import { handleCreateCustomer } from "./commandHandler";
import "./style.css";

export default function CreateCustomerForm() {
  return (
    <form
      className="form-section"
      onSubmit={(e) => {
        e.preventDefault();
        const name = e.target.name.value.trim();
        if (!name) return;
        handleCreateCustomer(name);
        e.target.reset();
      }}
    >
      <h2>Create Customer</h2>
      <input name="name" placeholder="Customer name" required />
      <button type="submit">Create</button>
    </form>
  );
}
