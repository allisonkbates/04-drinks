import EditDrink from '../components/EditDrink';

export default function editPage({ query }) {
  console.log(query);
  return (
    <div>
      <EditDrink id={query.id} />
    </div>
  )
}