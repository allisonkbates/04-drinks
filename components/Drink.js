import Link from 'next/link';
import DrinkStyles from "./styles/DrinkStyles";

export default function Drink({ drink }) {
  return (
    <Link href={`/drink/${drink.id}`}>
      <DrinkStyles>
        <img 
          src={drink?.photo?.image?.publicUrlTransformed || 'fallback-drink-img.png'} 
          alt={drink.name}>
        </img>
        <Link href={`/drink/${drink.id}`}><a>{drink.name}</a></Link>
      </DrinkStyles>
    </Link>
    )
}