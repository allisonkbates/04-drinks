import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import Nav from './Nav';

const HeaderStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 72px;
`;

export default function Header() {
  return(
    <HeaderStyles>
      <Logo/>
      <Search />
      <Nav />
    </HeaderStyles>
  );
}