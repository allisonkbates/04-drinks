import styled from "styled-components";
import Link from 'next/link';
import PrimaryLink from './styles/PrimaryLink';
import { useUser } from "./User";

const NavStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* flex-grow: 1; */
`;

export default function Nav() {
  const user = useUser();
  return (
    <NavStyles>
      {
        user && (
          <>
            <Link href="/add"><PrimaryLink>Add</PrimaryLink></Link>
            <Link href="/add"><PrimaryLink>Saved Drinks</PrimaryLink></Link>
            <Link href="/add"><PrimaryLink>Liquor Cabinet</PrimaryLink></Link>
          </>
        )
      }  
      {
        !user && (
          <Link href="/signin"><PrimaryLink>Sign In</PrimaryLink></Link>
        )
      }
       
    </NavStyles>
  )
}