import styled from "styled-components";
import PrimaryBtn from './styles/PrimaryBtn';

const NavStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export default function Nav() {
  return (
    <NavStyles>
      <PrimaryBtn type="button">Login</PrimaryBtn>
    </NavStyles>
  )
}