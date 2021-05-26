import SearchStyles from './styles/SearchStyles';
import useForm from '../lib/useForm';
import Router from 'next/router';

export default function Search() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    search: '',
  });

  return (
    <SearchStyles onSubmit={
      async (e) => {
        e.preventDefault();
        Router.push({
        pathname: `/drinks/`,
        query: `search=${inputs.search}`,
      })
      }
    }>
        <img src="/Search-Icon.svg"></img>
        <input type="search" placholder="Search for a drink" onChange={handleChange} id="search" name="search"></input>
        <button type="submit">Search</button>
    </SearchStyles>
  )
}