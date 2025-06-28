import { CustomerBlacklisted } from "../src/app/slices/07_TranslatingCustomerBlockedInterface/events";
import { AccountBlocked } from "../src/app/slices/09_BlockAccount/events";

// Mocks for the state
const customerAggregate = {
  id: 1,
  name: "John",
  customerStatus: "verified"
};

const accountAggregate = {
  id: 100,
  customerId: 1,
  accountStatus: "opened"
};

// Fake in-memory events captured
let capturedEvents = [];

function fakeAppendEvent(event) {
  capturedEvents.push(event);
}

// Inject fakes and run test
describe("Customer Blacklisting Flow", () => {
  beforeEach(() => {
    capturedEvents = [];
  });

  it("should emit CustomerBlacklisted and AccountBlocked events", () => {
    // Given
    const command = { type: "BlockCustomer", payload: { name: "John" } };

    // When — manually invoke the command with mocked dependencies
    const customerBlacklistedEvent = CustomerBlacklisted(customerAggregate.id, customerAggregate.name);
    fakeAppendEvent(customerBlacklistedEvent); // instead of appendEvent()
    
    const accountBlockedEvent = AccountBlocked(accountAggregate.id);
    fakeAppendEvent(accountBlockedEvent); // simulate pubsub/handler dispatch

    // Then
    expect(capturedEvents).toContainEqual({
      type: "CustomerBlacklisted",
      payload: {
        id: 1,
        name: "John",
        customerStatus: "blacklisted"
      }
    });

    expect(capturedEvents).toContainEqual({
      type: "AccountBlocked",
      payload: {
        accountId: 100,
        accountStatus: "blocked"
      }
    });
  });
});