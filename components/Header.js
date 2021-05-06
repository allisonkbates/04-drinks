import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import Nav from './Nav';

const HeaderStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 72px;
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
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