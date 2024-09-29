import ChildrensRequestListItem from "./ChildrensRequestListItem";


export default function ChildrensRequestList(props) {
  const requestsList = [
    { id: 1 , child_id: 1, account_number: 1, request_amount: 10,  request_note: 'Lunch money'},
    { id: 2 , child_id: 1, account_number: 1, request_amount: 15, request_note: 'Coffee snack'},
    { id: 3 , child_id: 1, account_number: 1, request_amount: 35, request_note: 'School stuff'},
  ];
  
  const parsedRequests = Array.isArray(requestsList) && 
  requestsList.map(request => (
    <ChildrensRequestListItem  {...request} key={request.id} />));
    
  return (
    <div> 
      <section>
       {parsedRequests }
      </section>
    </div>
  )
}
