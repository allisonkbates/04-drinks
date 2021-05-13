import styled from 'styled-components';

const DrinkRecipeStyles = styled.div`
  background-color: white;
  box-shadow: 0 0 5px 3px rgb(0 0 0 / 5%);
  padding: 6rem;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: var(--darkGray);
  .left-column, .right-column {
    flex: 0 1 50%;
  }
  .drink__img {
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
  a {
    color: var(--darkGray);
    text-decoration: underline;
    font-size: 1.5rem;
  }
  .line {
    margin: 6px 0px;
    height: 3px;
    width: 90%;
    background-color: var(--lightOrange);
  }
  .barware {
    display: flex;
    align-items: flex-end;
    margin: 2rem 0rem;

  }
  .barware__name {
    text-transform: capitalize;
    margin: 0;
    line-height: normal;
  }
  .barware__img {
    margin-right: 1.5rem;
  }
  .call-out {
    background-color: var(--lightOrange);
    padding: 0rem 2rem;
    border: 1px solid var(--orange);
    border-radius: 8px;
    width: 90%;
  }
`;

export default DrinkRecipeStyles;