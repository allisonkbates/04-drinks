import Drinks from "../../components/Drinks";
import Pagination from '../../components/Pagination';
import { useRouter } from "next/dist/client/router";

export default function DrinksPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);

  return (
    <div>
      <Pagination page={page || 1}/>
      <Drinks page={page || 1}/>
      <Pagination page={page || 1}/>
    </div>
  )
}