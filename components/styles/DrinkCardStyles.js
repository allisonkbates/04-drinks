import styled from 'styled-components';

const DrinkCardStyles = styled.div`
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: var(--bs);
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  cursor: pointer;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px 8px 0px 0px;
  }
  a {
    color: var(--orange);
    padding: 1rem 2rem;
    font-size: 2rem;
    font-family: 'Offside';
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid var(--lightGray);
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: var(--lightGray);
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

export default DrinkCardStyles;