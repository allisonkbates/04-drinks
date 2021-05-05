import { useMutation } from '@apollo/client';
import gql from "graphql-tag";
import useForm from "../lib/useForm";
import FormStyles from './styles/FormStyles';
import PrimaryBtn from './styles/PrimaryBtn';
import DisplayError from './DisplayError';

const CREATE_DRINK_MUTATION = gql`
  mutation CREATE_DRINK_MUTATION (  
    $name: String!,
    $description: String!
    $image: Upload
  ) {
  createDrink(data: {
    name: $name,
    description: $description,
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
    name: 'Negroni',
    description: 'This is the best drink.'
  });
  const [createDrink, { loading, error, data }] = useMutation(CREATE_DRINK_MUTATION, {
    variables: inputs,
  });

  return (
    <FormStyles 
      onSubmit={ async (e) => {
      e.preventDefault();
      console.log(inputs);
      // Submit the input fields to the backend
      await createDrink();
      clearForm();
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
            placeholder="Drink Name" 
            value={inputs.name}  
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Drink Description
          <textarea 
            id="description"
            name="description"
            placeholder="Drink Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <PrimaryBtn type="submit">+ Add Drink</PrimaryBtn>
      </fieldset>
    </FormStyles>
  )
}