import styled from "styled-components";
import Link from 'next/link';
import PrimaryBtn from './styles/PrimaryBtn';
import PrimaryLink from './styles/PrimaryLink';

const NavStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-grow: 1; */
`;

export default function Nav() {
  return (
    <NavStyles>
      <PrimaryBtn type="button">Login</PrimaryBtn>
      <Link href="/add"><PrimaryLink>Add</PrimaryLink></Link>
    </NavStyles>
  )
}