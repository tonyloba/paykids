export default function ChildrensTransactionListItem(props) {
  const { transaction_amount, transaction_note } = props;

  return (
      <div className="row">
        <div className="column-left">{transaction_note}</div>
        <div className="column-right">${(transaction_amount).toFixed(2)}</div>
      </div>
  );
}