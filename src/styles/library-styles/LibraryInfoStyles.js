import styled from "styled-components/macro";

const LibraryInfoStyles = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  margin-top: 50px;
  align-items: center;
  .input-div {
    input {
      width: 70%;
      background: #f9f8f8;
      padding: 10px 20px;
      border-radius: 5px;
      border: none;
    }
  }
  .info-tags {
    display: grid;
    gap: 50px;
    height: 100%;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    .green-bg {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: center;
      background: #075f49;
      padding: 10px;
      border-radius: 5px;
      p {
        color: #fff;
        font-size: 12px;
        width: 100%;
        text-align: center;
      }
    }
    .white-bg {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      padding: 10px;
      border-radius: 5px;
      width: 100%;
      filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
      p {
        font-size: 12px;
        width: 100%;
        text-align: center;
        color: #777777;
      }
    }
    .no-bg {
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        font-size: 12px;
        color: #777777;
      }
    }
  }
`;

export default LibraryInfoStyles;
