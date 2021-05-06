import gql from "graphql-tag";
import { useQuery } from '@apollo/client';
import DisplayError from './DisplayError';

const SINGLE_ITEM_QUERY = gql`
  query {
    Drink(where: {
      id: "608eaf849b1eb1752270e23f"
    }) {
      name
      description
    }
  }
`;

export default function SingleDrink({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY);
  console.log({ data, loading, error });
  if(loading) return <p>Loading...</p>
  if(error) return <DisplayError error={error}/>
  return (
    <div>
      <h2>{data.Drink.name}</h2>
    </div>
  )

}