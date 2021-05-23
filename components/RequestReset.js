import FormStyles from './styles/FormStyles';
import DisplayError from './DisplayError';
import useForm from '../lib/useForm';
import PrimaryBtn from './styles/PrimaryBtn';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      message
      code
    }
  }
`;

export default function RequestReset() {

  const { inputs, handleChange, clearForm, resetForm } = useForm({
    email: '',
  });

  const [requestReset, { data, loading, error }] = useMutation(REQUEST_RESET_MUTATION, {
    variables: inputs,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await requestReset().catch(console.error);
    console.log(error)
    resetForm();
  }

  return (
    <FormStyles method="POST" onSubmit={handleSubmit}>
      <DisplayError error={error} />
      <h2>Request a Password Reset</h2>
      <fieldset disabled={loading} aria-busy={loading}>
        {data?.sendUserPasswordResetLink === null && <p>Success! Check your email for a link!</p>}
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
        <PrimaryBtn type="submit">Request Reset</PrimaryBtn>
      </fieldset>
    </FormStyles>
  )
}