import styled from "styled-components/macro";

const HeadingStyles = styled.div`
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 15px;
  color: #777;
  font-weight: bold;

  .headerwrapper{
    display:flex;
    justify-content: space-between;
  }
  .headerTitle {
    align-self: center;
  }
  .tableSearch{
    border: 1px solid rgba(227, 222, 220, 0.29);
    box-shadow: 0px 2px 7px rgba(102, 54, 27, 0.18);
    border-radius: 0.5rem;
    padding: 0 0.5rem;
    width: 30%;
  }

  @media only screen and (max-width: 760px) {
    .tableSearch {
      width: 63%;
    }
  }
`;

export default HeadingStyles;
