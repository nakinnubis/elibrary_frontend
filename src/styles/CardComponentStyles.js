import styled from "styled-components/macro";

const CardComponentStyles = styled.div`
  background: rgba(177, 224, 35, 0.1);
  border: 1px solid #b1e023;
  color: #055844;
  display: flex;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  height: 150px;
  cursor: pointer;
  width: 50%;
  @media screen and (max-width: 768px){
    width: 45%;
    text-align: center;
  }
  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .card-image {
    width: 30px;
    height: 30px;
    position: relative;
    align-self: center;
    margin: 5px 0 15px 0;
  }
  p {
    display: block;
    margin-top: 10px;
  }
`;

export default CardComponentStyles;
