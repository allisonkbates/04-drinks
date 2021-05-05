import { useState } from "react";

export default function useForm(initial= {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  // example state object:
  // {
  //  name: 'negroni',
  //  description: 'gin, campari, vermouth',
  //  price: 1000,
  // }

  function handleChange(e) {
    let {name, value, type} = e.target;
    // e.target always converts to strings, even if it's a number
    // This code below is not necessarily being used for drinks data, but may be applicable for future data so keeping here as an example.
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value,
    })
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));
    setInputs(blankState);
  }
  // return the things we want to surface from this custom hook
  return {inputs, handleChange, resetForm, clearForm};
}