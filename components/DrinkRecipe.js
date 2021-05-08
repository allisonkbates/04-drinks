import gql from "graphql-tag";
import { useQuery } from '@apollo/client';
import Head from 'next/head';
import DisplayError from './DisplayError';
import DrinkRecipeStyles from './styles/DrinkRecipeStyles';
import makeListItems from '../lib/makeListItems';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Drink(where: { id: $id }) {
      id
      name
      description
      photo {
        altText,
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function DrinkRecipe({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id: id,
    }
  });
  console.log({ data, loading, error });
  
  if(loading) return <p>Loading...</p>
  if(error) return <DisplayError error={error}/>
  const { Drink } = data;

  return (
    <DrinkRecipeStyles>
      <Head>
        <title>Drinks DB | {Drink.name}</title>
      </Head>
      <div className="left-column">
        <h1>{Drink.name}</h1>
        <h3>By NYTimes Cooking</h3>
        <div className="line"></div>
        <h2>Ingredients</h2>
        <ul>{makeListItems(Drink.description)}</ul>
        <div className="line"></div>
        <h2>Preparation</h2>
        <ol>{makeListItems(Drink.description)}</ol>
      </div>
      <div className="right-column">
        <img src={Drink.photo.image.publicUrlTransformed} alt={Drink.photo.altText}></img>
        <h2>Variations</h2>
        <h2>Barware</h2>
        <div className="call-out">
          <h2>Ingredients Needed</h2>
        </div>
      </div>
    </DrinkRecipeStyles>
  )

}