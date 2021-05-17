import Drinks from "../components/Drinks";
import Pagination from '../components/Pagination';

export default function DrinksPage() {
  return (
    <div>
      <Pagination page={1}/>
      <Drinks/>
      <Pagination page={1}/>
    </div>
  )
}

