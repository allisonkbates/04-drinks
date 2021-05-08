import styled from 'styled-components';

const DrinkRecipeStyles = styled.div`
  background-color: white;
  padding: 6rem;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: var(--darkGray);
  .left-column, .right-column {
    flex: 0 1 50%;
  }
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
  }
  h1 {
    color: var(--orange);
    font-family: 'Offside';
    font-size: 3rem;
    margin: 0;
  }
  h2 {
    color: var(--orange);
    font-family: 'Offside'; 
    margin-bottom: 0;
  }
  h3 {
    font-weight: 400;
    margin: -6px 0px 0px;
  }
  p {
    font-size: 1.5rem;
  }
  ul, ol {
    padding: 0rem 2rem;
    margin: 1rem 0rem;
  }
  li::marker {
    color: var(--orange);
  }
  .line {
    margin: 6px 0px;
    height: 3px;
    width: 90%;
    background-color: var(--lightOrange);
  }
  .call-out {
    background-color: var(--lightOrange);
    padding: 0rem 2rem;
    border: 1px solid var(--orange);
    border-radius: 8px;
  }
`;

export default DrinkRecipeStyles;