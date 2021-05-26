import Drinks from "../../components/Drinks";
import Pagination from '../../components/Pagination';
import { useRouter } from "next/dist/client/router";

export default function DrinksPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const search = query.search;

  return (
    <div>
      <Drinks page={page || 1} search={search || ''}/>
      <Pagination page={page || 1}/>
    </div>
  )
}