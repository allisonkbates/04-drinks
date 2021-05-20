import { useQuery } from '@apollo/client';
import gql from "graphql-tag"
import styled from 'styled-components';
import Drink from './DrinkCard';
import { perPage } from '../config';

export const ALL_DRINKS_QUERY = gql`
  query ALL_DRINKS_QUERY($skip: Int = 0, $first: Int) {
    allDrinks(first: $first, skip: $skip) {
      id
      name
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const DrinksListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
`;

export default function Drinks({ page }) {
  const { data, error, loading } = useQuery(ALL_DRINKS_QUERY, {
    variables: {
      skip: page * perPage - perPage, 
      first: perPage,
    },
  });
  console.log(data, error, loading);
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.msg}</p>
  return (
    <div>
      <DrinksListStyles>
        {data.allDrinks.map(drink => (
          <Drink key={drink.id} drink={drink} />
        ))}
      </DrinksListStyles>
    </div>
  )
}