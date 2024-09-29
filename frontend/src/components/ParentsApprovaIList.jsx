import ChildrensRequestList from "./ChildrensRequestList";
import Button from 'muicss/lib/react/button';

export default function ParentsApprovalList(props) {
  return (
    <main className="container">
      <p className="heading">Tina's Parent: Dashboard </p>
      <article className="frame-money-request">
        <span>
          <p className="title-approve">Approve Money: Tina</p>
        </span>
        <div className="row-name">
          <p>Purpose</p>
          <p>Amount</p>
        </div>
        <div className="row-approval">
          <p>Approval</p>
        </div>
        <div>
          <ChildrensRequestList />
        </div>
        <div>
          <Button className="button-go" type="submit" value="Submit">
            Go to Tina's Account
          </Button>
        </div>
        <div>
          <Button className="button-turn-off" type="submit" value="Submit">
            Turn Off Account Setting: Tina
          </Button>
        </div>
      </article>
    </main>
  );
}
