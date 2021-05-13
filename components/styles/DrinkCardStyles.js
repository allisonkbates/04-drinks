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
  .drink-card__bar {
    margin: 1rem 2rem;
  }
`;

export default DrinkCardStyles;