import useForm from "../lib/useForm";

export default function CreateDrink() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'Negroni',
    description: 'This is the best drink.'
  });
  return (
    <form>
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
      <button type="button" onClick={clearForm}>Clear Form</button>
      <button type="button" onClick={resetForm}>Reset Form</button>
    </form>
  )
}