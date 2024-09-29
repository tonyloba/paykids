import ChildrensTransactionList from "./ChildrensTransactionList";
import CreditCard from "./CreditCard";
import Button from "muicss/lib/react/button";

export default function ChildrensDashboard(props) {
  return (
    <main className="container">
         <p className="heading">Your Dashboard </p>
      <article className="frame-credit-card">
        <div className="text">
          <p>Tina Toaster's Card</p>
        </div>
        <div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/css/mui.min.css"
          />
          <CreditCard />
          <p>Money Available: $12.25</p>
        </div>
        <article className="frame-recent">
          <span>
            <p>Recent Transactions</p>
          </span>
          <div>
            <ChildrensTransactionList />
          </div>
        </article>
      </article>
    </main>
  );
}
