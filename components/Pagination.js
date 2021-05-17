import Head from 'next/head';
import PaginationStyles from './styles/PaginationStyles';

/* TODO: Finish this up - left off at 4 minute mark */

export default function Pagination( { page }) {
  return (
    <PaginationStyles>
      <Head>
        <title>Drinks DB - Page {page} of ___</title>
      </Head>
    </PaginationStyles>
  );
};