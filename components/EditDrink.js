import gql from "graphql-tag"
import { useQuery, useMutation } from "@apollo/client";
import FormStyles from './styles/FormStyles';
import DisplayError from './DisplayError';
import PrimaryBtn from './styles/PrimaryBtn';
import useForm from '../lib/useForm';

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
  const [updateDrink, { data: updateData, error: updateError, loading: updateLoading }] = useMutation(UPDATE_DRINK_MUTATION);
  // 2.5  Create some state for this form
  const { inputs, handleChange, clearForm, resetForm } = useForm(data?.Drink);
  if (loading) return <p>Loading...</p>
  // 3. Use the form to handle the updates
  return (
    <FormStyles
      // Handle Submit!
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await updateDrink({
          variables: {
            id,
            name: inputs.name,
            ingredients: inputs.ingredients,
          },
        }).catch(console.error);
      //   clearForm();
      //   // Go to that product's page
      //   Router.push({
      //     pathname: `/drink/${res.data.createDrink.id}`
      //   })
      }}>
      <DisplayError error={error || updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
        <label htmlFor="name">
          Drink Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="What is your drink's name?"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Drink Description
          <textarea
            id="description"
            name="description"
            placeholder="Tell us how to make this drink..."
            value={inputs.ingredients || ""}
            onChange={handleChange}
          />
        </label>
        <PrimaryBtn type="submit">Update Drink</PrimaryBtn>
      </fieldset>
    </FormStyles>
  )
}