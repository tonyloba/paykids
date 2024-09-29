import ChildrensTransactionListItem from "./ChildrensTransactionListItem";

export default function ChildrensTransactionList(props) {
  const transactionsList = [
    { id: 1 , child_id: 1, account_number: 1, transaction_amount: 78.12, transaction_note: 'www.sephora.com'},
    { id: 2 , child_id: 1, account_number: 1, transaction_amount: 24.33, transaction_note: 'www.toyskingdom.ca'},
    { id: 3 , child_id: 1, account_number: 1, transaction_amount: 31.98, transaction_note: 'www.chapters.indigo.ca'},
    { id: 4 , child_id: 1, account_number: 1, transaction_amount: 12.67, transaction_note: 'www.amazon.ca'},
    { id: 5 , child_id: 1, account_number: 1, transaction_amount: 49.59, transaction_note: 'www.sephora.ca'},
    { id: 6 , child_id: 1, account_number: 1, transaction_amount: 53.21, transaction_note: 'www.walmart.ca'},
  ];
  
  const parsedTransactions = Array.isArray(transactionsList) && 
    transactionsList.map(transaction => (
      <ChildrensTransactionListItem  {...transaction} key={transaction.id} />));

  return (
    <div>
      <section>
       {parsedTransactions}
      </section>
    </div>
  )
}