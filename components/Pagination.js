import Head from 'next/head';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import DisplayError from '../components/DisplayError';
import PaginationStyles from './styles/PaginationStyles';
import gql from 'graphql-tag';
import { perPage } from '../config';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allDrinksMeta {
      count
    }
  }
`;

export default function Pagination( { page }) {
  const { data, error, loading } = useQuery(PAGINATION_QUERY);
  if(loading) return 'Loading...';
  if(error) return <DisplayError error={error} />;
  const { count } = data._allDrinksMeta;
  const pageCount = Math.ceil(count / perPage);
  return (
    <PaginationStyles>
      <Head>
        <title>Drinks DB - Page {page} of {pageCount}</title>
      </Head>
      <Link href={`/drinks/${page - 1}`}><a aria-disabled={page <= 1}>← Prev</a></Link>
      <p>Page {page} of {pageCount}</p>
      <p>{count} Drinks Total</p>
      <Link href={`/drinks/${page + 1}`}><a aria-disabled={page >= pageCount}>Next →</a></Link>
    </PaginationStyles>
  );
};