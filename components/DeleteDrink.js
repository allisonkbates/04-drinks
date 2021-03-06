import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import SecondaryBtn from './styles/SecondaryBtn';

const DELETE_DRINK_MUTATION = gql`
  mutation DELETE_DRINK_MUTATION($id: ID!) {
    deleteDrink(id: $id) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  console.log(payload);
  console.log('running the upate function after delete');
  cache.evict(cache.identify(payload.data.deleteDrink));
}

export default function DeleteDrink({ id, children }) {
  const [deleteDrink, { loading }] = useMutation(DELETE_DRINK_MUTATION, {
    variables: { id: id },
    update: update,
  }); 
  return (
    <SecondaryBtn 
      type="button"
      disabled={loading}
      onClick={() => {
        if (confirm('Are you sure you want to delete this drink?')) {
          console.log('Delete');
          deleteDrink().catch(err => alert(err.message));
        }; 
      }}
    >
      {children}
    </SecondaryBtn>
  )
}