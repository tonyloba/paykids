import ChildrensTransactionList from "./ChildrensTransactionList";
import ParentsSendMoneyForm from "./ParentsSendMoneyForm";

export default function ParentsDashboard(props) {
  return (
    <main className="container">
        <p className="heading">Parent Dashboard: Tina </p>
      <div>
        <div>
          <ParentsSendMoneyForm />
        </div>
        <article className="frame-recent-parents">
          <span>
            <p>Recent Transactions</p>
          </span>
          <div>
            <ChildrensTransactionList />
          </div>
        </article>
      </div>
    </main>
  );
}
