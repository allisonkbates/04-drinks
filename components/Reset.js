import FormStyles from './styles/FormStyles';
import DisplayError from './DisplayError';
import useForm from '../lib/useForm';
import PrimaryBtn from './styles/PrimaryBtn';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION($email: String!, $token: String!, $password: String!) {
    redeemUserPasswordResetToken(
      email: $email, 
      token: $token, 
      password: $password
    ) {
      message
      code
    }
  }
`;

export default function Reset({ token }) {

  const { inputs, handleChange, clearForm, resetForm } = useForm({
    email: '',
    password: '',
    token,
  });

  const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
    variables: inputs,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await reset().catch(console.error);
    console.log(error)
    resetForm();
  }

  const successfulError =  data?.redeemUserPasswordResetToken?.code ? data?.redeemUserPasswordResetToken : undefined;

  return (
    <FormStyles method="POST" onSubmit={handleSubmit}>
      <DisplayError error={error || successfulError} />
      <h2>Reset Your Password</h2>
      <fieldset disabled={loading} aria-busy={loading}>
        {data?.redeemUserPasswordResetToken === null && <p>Success! Please sign in with your new password.</p>}
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
        <PrimaryBtn type="submit">Reset Password</PrimaryBtn>
      </fieldset>
    </FormStyles>
  )
}