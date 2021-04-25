import styled from "styled-components"

const SearchStyles = styled.div`
  margin: 0px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  border: 1px solid var(--orange);
  border-radius: 8px;
  height: 40px;
  input {
    width: 100%;
    border: none;
    font-size: 16px;
    outline: none;
    padding: 6px;
    color: var(--orange);
  }
  input::placeholder {
    color: var(--orange);
    font-family: 'Oxygen';
    font-weight: 400;
  }
  input::-webkit-search-cancel-button{
    appearance: none;
  }
  img {
    padding: 0px 8px;
  }
`;

export default function Search() {
  return (
    <SearchStyles>
      <img src="/Search-Icon.svg"></img>
      <input type="search" placeholder="Search for a Drink..."/>
    </SearchStyles>
  )
}