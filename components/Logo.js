import styled from 'styled-components';
import Link from 'next/link';

const LogoStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-grow: 1; */
  cursor: pointer;
  img {
    width: 24px;
  }
  p {
    font-family: 'Offside', cursive;
    font-size: 24px;
    padding: 0 0 0 12px;
    color: var(--orange);
    margin: 0;
  }
`;

export default function Logo() {
  return (
    <Link href="/">
      <LogoStyles>
        <img src="/Rocks-Glass-Icon.svg"></img>
        <p>DrinksDB</p>
      </LogoStyles>
    </Link>
  )
}