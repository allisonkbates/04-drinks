import styled from "styled-components";
import PrimaryBtn from './styles/PrimaryBtn';

const NavStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

// const PrimaryBtn = styled.button`
//   background-color: var(--orange);
//   color: var(--white);
//   border: none;
//   padding: 12px 16px;
//   border-radius: 8px;
//   font-family: 'Offside';
// `;

export default function Nav() {
  return (
    <NavStyles>
      <PrimaryBtn type="button">Login</PrimaryBtn>
    </NavStyles>
  )
}