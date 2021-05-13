import Link from 'next/link';
import DrinkCardStyles from "./styles/DrinkCardStyles";
import SecondaryLink from './styles/SecondaryLink';
import TertiaryLink from './styles/TertiaryLink';

export default function DrinkCard({ drink }) {
  return (
    <Link href={`/drink/${drink.id}`}>
      <DrinkCardStyles>
        <img 
          src={drink?.photo?.image?.publicUrlTransformed || 'fallback-drink-img.png'} 
          alt={drink.name}>
        </img>
        <div className="drink-card__bar">
        <Link href={`/drink/${drink.id}`}><SecondaryLink>{drink.name}</SecondaryLink></Link>
        <Link href={{
          pathname: 'edit',
          query: {
            id: drink.id
          },
        }}>
          <TertiaryLink>
            Edit ✏️
          </TertiaryLink>
        </Link>
        </div>
      </DrinkCardStyles>
    </Link>
    )
}