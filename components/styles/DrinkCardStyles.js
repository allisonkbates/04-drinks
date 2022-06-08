import styled from 'styled-components';

const DrinkCardStyles = styled.div`
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: var(--bs);
  position: relative; /* confirm this is needed */
  display: flex;
  flex-direction: column;
  border-radius: 8px; /* standardize */
  cursor: pointer;
  
  :hover {
    transition: all 0.3s ease-out;
    transform: translateX(3px) translateY(3px);
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px 8px 0px 0px; /* standardize */
  }
  .drink-card__bar {
    margin: 1rem 2rem; /* standardize */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default DrinkCardStyles;