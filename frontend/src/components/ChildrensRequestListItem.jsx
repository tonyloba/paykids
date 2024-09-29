import Button from "muicss/lib/react/button";

export default function ChildrensRequestListItem(props) {
  const { request_note, request_amount } = props;

  return (
    <table className="row-req">
      <div className="column-left-req">{request_note}</div>
      <div className="column-right-req">${request_amount}</div>
      <div>
      <Button className="button-check" type="submit" value="Submit">
        &#x2714;
      </Button>
      <Button className="button-check" type="submit" value="Submit">
        &#x2716;
      </Button>
      </div>
    </table>
  );
}
