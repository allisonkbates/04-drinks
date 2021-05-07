import Link from 'next/link';
import DrinkCardStyles from "./styles/DrinkCardStyles";

export default function DrinkCard({ drink }) {
  return (
    <Link href={`/drink/${drink.id}`}>
      <DrinkCardStyles>
        <img 
          src={drink?.photo?.image?.publicUrlTransformed || 'fallback-drink-img.png'} 
          alt={drink.name}>
        </img>
        <Link href={`/drink/${drink.id}`}><a>{drink.name}</a></Link>
      </DrinkCardStyles>
    </Link>
    )
}