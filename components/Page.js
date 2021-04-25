import styled, { createGlobalStyle } from 'styled-components';
import Header from "./Header";

const GlobalStyles = createGlobalStyle`
  html {
    --orange: #D4652E;
    --darkGray: #4F4f4F;
    --white: #FFFFFF;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Oxygen', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2
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
  padding: rem;
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