import Link from 'next/link';
import styled from 'styled-components';
import DrinkStyles from "./styles/DrinkStyles";

const DrinkNameStyles = styled.h3`
  padding: 1rem;
  font-family: 'Offside';
  a {
    color: var(--orange);
  }
`;

export default function Drink({ drink }) {
  return (
    <DrinkStyles>
      <img 
        src={drink?.photo?.image?.publicUrlTransformed} 
        alt={drink.name}>
      </img>
      <DrinkNameStyles>
        <Link href={`/drink/${drink.id}`}><a>{drink.name}</a></Link>
      </DrinkNameStyles>
    </DrinkStyles>
    )
}