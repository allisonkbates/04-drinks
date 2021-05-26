import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  // This function is a hairy video from Wes Advanced React - video 35
  return {
    keyArgs: false,
    read(existing = [], { args, cache }) {
      const { skip, first } = args;

      // read the number of items on the page from the cache
      const data = cache.readQuery({ query: PAGINATION_QUERY})
      const count = data?._allDrinksMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);
      
      // Check if we have the existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);
      // if there are items and there aren't enough items to satisfy how many were requested and we are on the last page, then just sent it
      if(items.length && items.length !== first && page === pages) {
        return items;
      }
      if(items.length !== first) {
        // we don't have any items, go to the network to fetch them
        return false;
      }
      // if there are items return them from the cache
      if(items.length) {
        // console.log(`There are ${items.length} in the cache. gonna send them to apollo`);
        return items;
      }

      return false; //fallback on if statements
      // 1. Read function for the items
      // 2. We have two options
        // a. return the items because they are already in the cache
        // b. return false from here (network request)
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      // This runs when the apollo client comes back from the network with our products
      console.log(`merging items from the network ${incoming.length}`);
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      console.log(merged);
      // finally we return the merged items from the cache
      return merged;
    }
  }
}