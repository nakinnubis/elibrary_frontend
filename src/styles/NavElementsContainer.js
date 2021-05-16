import styled from "styled-components/macro";

const NavElementsContainer = styled.div`
  border-bottom: 1px solid #ced4da;
  height: 7vh;

  .nav-grid {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
  }

  @media (max-width: 920px) {
    display: none;
  }
`;

export default NavElementsContainer;
