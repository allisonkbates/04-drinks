import gql from "graphql-tag"
import styled from "styled-components";
import { useQuery } from "@apollo/client";

export const ALL_INGREDIENTS_QUERY = gql`
  query ALL_INGREDIENTS_QUERY {
    allIngredients {
      id
      name
      category
    }
  }
`;

const IngListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
`;

export default function Ingredients() {
  const { data, error, loading } = useQuery(ALL_INGREDIENTS_QUERY);
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.msg}</p>
  return (
    <div>
      <IngListStyles>
        {data.allIngredients.map(ing => (
          <div>
            <p>{ing.name}</p>
            <p>{ing.category}</p>
          </div>
        ))}
      </IngListStyles>
    </div>
  )
}