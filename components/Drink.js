import Link from 'next/link';
import DrinkStyles from "./styles/DrinkStyles";

export default function Drink({ drink }) {
  return (
    <DrinkStyles>
      <img 
        src={drink?.photo?.image?.publicUrlTransformed} 
        alt={drink.name}>
      </img>
      <h3>
        <Link href={`/drink/${drink.id}`}>{drink.name}</Link>
      </h3>
    </DrinkStyles>
    )
}