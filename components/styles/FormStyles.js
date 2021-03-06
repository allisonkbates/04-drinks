import styled,  {keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }
  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const FormStyles = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background-color: white;
  border-radius: 8px;
  padding: 40px;
  font-size: 1.5rem;
  line-height: 1.75;
  font-weight: 400;
  color: var(--darkGray);
  label {
    display: block;
    margin-bottom: 2rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    border: 1px solid var(--darkGray);
    border-radius: 6px;
    font-family: 'Oxygen';
    &:focus {
      outline: 0;
      border-color: var(--orange);
    }
  }

  fieldset {
    border: 0;
    padding: 0;
    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      margin: 1rem 0px;
      border-radius: 2px;
      background-image: linear-gradient(
        to right,
        var(--orange) 0%,
        #e2b04a 50%, /* TODO - pick a better color */
        var(--orange) 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default FormStyles;