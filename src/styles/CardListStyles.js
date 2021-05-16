import styled from "styled-components/macro";

const CardListStyles = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-evenly;
  /* grid-template-columns: repeat(4, 1fr); */
  gap: 20px;

  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export default CardListStyles;
