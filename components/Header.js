import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import Nav from './Nav';

const HeaderStyles = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  box-shadow: var(--bs);
  .container {
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
    
  }
`;

export default function Header() {
  return(
    <HeaderStyles>
      <div className="container">
        <Logo/>
        <Search />
        <Nav />
      </div>
    </HeaderStyles>
  );
}