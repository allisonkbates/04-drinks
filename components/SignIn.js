import FormStyles from './styles/FormStyles';
import DisplayError from './DisplayError';
import useForm from '../lib/useForm';
import PrimaryBtn from './styles/PrimaryBtn';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { CURRENT_USER_QUERY } from './User';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id 
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }  
  }
`;

export default function SignIn() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({ 
    email: '',
    password: ''
  });
  
  const [ signin, { data, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    // refetch the currently logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY}]
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await signin();
    resetForm();
  }

  const error = data?.authenticateUserWithPassword.__typename === "UserAuthenticationWithPasswordFailure" ? data?.authenticateUserWithPassword : undefined;

  return (
    <FormStyles method="POST" onSubmit={handleSubmit}>
      <DisplayError error={error} />
      <h2>Sign Into Your Account</h2>
      <fieldset> 
      {/* disabled="loading" aria-busy="loading" */}
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </label>
        <PrimaryBtn type="submit">Sign In</PrimaryBtn>
      </fieldset>
    </FormStyles>
  )
}