import { useMutation } from '@apollo/client';
import gql from "graphql-tag";
import Router from 'next/router';
import useForm from "../lib/useForm";
import FormStyles from './styles/FormStyles';
import PrimaryBtn from './styles/PrimaryBtn';
import DisplayError from './DisplayError';
import { ALL_DRINKS_QUERY } from './Drinks';

/* TODO: Check this query! */
const CREATE_DRINK_MUTATION = gql`
  mutation CREATE_DRINK_MUTATION (  
    $name: String!,
    $ingredients: String!
    $preparation: String
    $barware: String
    $image: Upload
  ) {
  createDrink(data: {
    name: $name,
    ingredients: $ingredients,
    preparation: $preparation,
    barware: $barware,
    status: "AVAILABLE",
    photo: { create: { image: $image, altText: $name } }
  }) {
    id
    name
  }
}
`;

export default function CreateDrink() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: '',
    ingredients: ''
  });
  const [createDrink, { loading, error, data }] = useMutation(CREATE_DRINK_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: ALL_DRINKS_QUERY }],
  });
  /* TODO: Add all fields to this form */
  return (
    <FormStyles 
      onSubmit={ async (e) => {
      e.preventDefault();
      console.log(inputs);
      // Submit the input fields to the backend
      const res = await createDrink();
      clearForm();
      // Go to that product's page
      Router.push({
        pathname: `/drink/${res.data.createDrink.id}`
      })
    }}>
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="image">
          Image
          <input
            required
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </label>
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
        <label htmlFor="ingredients">
          Drink Ingredients
          <textarea 
            id="ingredients"
            name="ingredients"
            placeholder="Tell us how to make this drink..."
            value={inputs.ingredients || ""}
            onChange={handleChange}
          />
        </label>
        <PrimaryBtn type="submit">+ Add Drink</PrimaryBtn>
      </fieldset>
    </FormStyles>
  )
}