import gql from "graphql-tag"
import { useQuery, useMutation } from "@apollo/client";

const SINGLE_DRINK_QUERY = gql`
  query SINGLE_DRINK_QUERY($id: ID!) {
    Drink(where: { id: $id }) {
      id
      name
      ingredients
      preparation
    }
  }
`;

const UPDATE_DRINK_MUTATION = gql`
  mutation UPDATE_DRINK_MUTATION(
    $id: ID!
    $name: String
    $ingredients: String
    $preparation: String
  ) {
    updateDrink(
      id: $id,
      data: {
        id: $id,
        name: $name,
        ingredients: $ingredients,
        preparation: $preparation,
      } 
    ) {
      id
      name
      ingredients
      preparation
    }
  }
`;

export default function EditDrink({ id }) {
  // 1. Get the existing product
  const { data, error, loading } = useQuery(SINGLE_DRINK_QUERY, {
    variables: { id },
  });

  // 2. Get the mutation to update the product 
  const [updateDrink, { data: updateData, error: updateError, loading: updateLoading }] = useMutation(UPDATE_DRINK_MUTATION, {
    variables: {
      id
      // TODO: Pass in updates to drink here!
    }
  })
  // 3. Use the form to handle the updates


  return <p>Update {id}</p>
}