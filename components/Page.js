import styled, { createGlobalStyle } from 'styled-components';
import Header from "./Header";

const GlobalStyles = createGlobalStyle`
  html {
    --orange: #D4652E;
    --lightOrange: #FFF8F2;
    --darkGray: #4F4f4F;
    --white: #FFFFFF;
    --maxWidth: 1200px;
    --bs: 0 2px 10px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Oxygen', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    background-color: var(--lightOrange);
  }
  a {
    text-decoration: none;
    color: var(--darkGray);
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: 'Oxygen', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 6rem 2rem; /* standardize this value to spacing variable */
`

export default function Page({ children }) {
  return ( 
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  )
}