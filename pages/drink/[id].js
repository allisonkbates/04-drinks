import DrinkRecipe from '../../components/DrinkRecipe';

export default function SingleDrinkPage({query}) {

  return (
    <DrinkRecipe id={query.id}></DrinkRecipe>
  )  
}

