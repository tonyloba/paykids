export default function ParentsChildrenListItem(props) {
  const {first_name, account_balance } = props;

  return (
    <div>
      <h1>{first_name}</h1>
      <h1>{account_balance}</h1>
  
    </div>
  )
}