import useForm from "../lib/useForm";
import FormStyles from './styles/FormStyles';
import PrimaryBtn from './styles/PrimaryBtn';

export default function CreateDrink() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'Negroni',
    description: 'This is the best drink.'
  });
  return (
    <FormStyles>
      <fieldset disabled>
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
          <input
            type="text"
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