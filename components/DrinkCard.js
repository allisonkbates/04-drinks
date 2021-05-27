import Link from 'next/link';
import DrinkCardStyles from "./styles/DrinkCardStyles";
import SecondaryLink from './styles/SecondaryLink';
import TertiaryLink from './styles/TertiaryLink';
import DeleteDrink from './DeleteDrink';

export default function DrinkCard({ drink }) {
  return (
    // <Link href={`/drink/${drink.id}`}>
      <DrinkCardStyles>
        <Link href={`/drink/${drink.id}`}>
          <img 
            src={drink?.photo?.image?.publicUrlTransformed || '/fallback-drink-img.png'} 
            alt={drink.name}>
          </img>
        </Link>
        <Link href={`/drink/${drink.id}`}>
          <div className="drink-card__bar">
            <Link href={`/drink/${drink.id}`}>
              <SecondaryLink>{drink.name}</SecondaryLink>
            </Link>
          </div>
        </Link>
        <div className="drink-card__bar">
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
          <DeleteDrink id={drink.id}>Delete</DeleteDrink>
        </div>
      </DrinkCardStyles>
    )
}