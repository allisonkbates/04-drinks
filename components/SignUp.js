import FormStyles from './styles/FormStyles';
import DisplayError from './DisplayError';
import useForm from '../lib/useForm';
import PrimaryBtn from './styles/PrimaryBtn';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { CURRENT_USER_QUERY } from './User';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($email: String!, $name: String!, $password: String!) {
    createUser(data: {
      email: $email,
      name: $name,
      password: $password,
    }) {
      id
      email
      name
    }
  }
`;

export default function SignUp() {

  const { inputs, handleChange, clearForm, resetForm } = useForm({ 
    email: '',
    name: '',
    password: '',
  });
  
  const [ signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await signup().catch(console.error);
    console.log(error)
    resetForm();
  }

  return (
    <FormStyles method="POST" onSubmit={handleSubmit}>
      <DisplayError error={error} />
      <h2>Sign Up For An Account</h2>
      <fieldset disabled={loading} aria-busy={loading}>
      {data?.createUser && <p>Signed up with {data.createUser.email} - Please go ahead and sign in!</p>}
        <label htmlFor="name">
          Name
          <input
            type="name"
            name="name"
            placeholder="Enter your name"
            autoComplete="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </label>
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
        <PrimaryBtn type="submit">Sign Up</PrimaryBtn>
      </fieldset>
    </FormStyles>
  )
}