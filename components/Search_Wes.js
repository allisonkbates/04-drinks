import { useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import gql from 'graphql-tag';
import styled, {keyframes} from 'styled-components';

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }
  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`;

const SearchStyles = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 10px;
    border: 0;
    font-size: 2rem;
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

const Dropdown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: 1px solid var(--lightGrey);
`;

const DropdownItem = styled.div`
  border-bottom: 1px solid var(--lightGrey);
  background: ${(props) => (props.highlighted ? '#f7f7f7' : 'white')};
  padding: 1rem;
  transition: all 0.2s;
  ${(props) => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${(props) => (props.highlighted ? props.theme.lightgrey : 'white')};
  img {
    margin-right: 10px;
  }
`;

const SEARCH_DRINKS_QUERY = gql`
  query SEARCH_DRINKS_QUERY($searchTerm: String!) {
    searchTerms: allDrinks(
      where: {
        OR: [
          {name_contains_i: $searchTerm}
          {ingredients_contains_i: $searchTerm}
          {preparation_contains_i: $searchTerm}
        ]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Search() {
  const [findItems, { loading, data, error }] = useLazyQuery(SEARCH_DRINKS_QUERY, {
    fetchPolicy: 'no-cache',
  });
  resetIdCounter();
  const { getMenuProps, getInputProps, getComboboxProps, } = useCombobox({
    items: [],
    onInputValueChange() {
      console.log('input changed');
    },
    onSelectedItemChange() {
      console.log('selected item change');
    },
  });
  
  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
      {/* <img src="/Search-Icon.svg"></img> */}
        <input {...getInputProps({
          type: 'search',
          placeholder: 'Search for a drink...',
          id: 'search',
          className: 'loading',
        })}/>
      </div>
      <Dropdown {...getMenuProps()}>
        <DropdownItem>Hey</DropdownItem>
        <DropdownItem>Hey</DropdownItem>
        <DropdownItem>Hey</DropdownItem>
        <DropdownItem>Hey</DropdownItem>
      </Dropdown>
    </SearchStyles>
  )
}