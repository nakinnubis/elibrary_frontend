import styled from "styled-components/macro";

const NotificationListStyles = styled.div`
  padding-top: 1rem;
  border: 1px solid #ced4da;
  align-items: center;
  overflow: scroll;

  thead {
    tr {
      font-weight: bold;
      color: #777;
    }
    th:first-of-type {
      padding: 0 2rem;
    }
  }

  tbody {
    color: #777;

    td:first-of-type {
      padding: 0 2rem;
    }

    td:nth-of-type(3) {
      color: #055844;
      font-weight: bold;
    }

    .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .dropdown-content p {
    color: black;
    padding: 10px;
    cursor:pointer;
    
  }

  .dropdown-content p:hover {
    background-color: #055844;
    color: #FFFFFF;
  }

  .dropdown:hover .dropdown-content {display: block;}

  }

  @media (max-width: 991px) {
    thead {
      font-size: 1rem;
    }

    tr {
      font-size: .82rem;
    }

    td {
      img {
        width: 1.5rem;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    thead {
      font-size: 1rem;
    }

    tr {
      font-size: .82rem;
    }

    td {
      img {
        width: 1.5rem;
      }
    }
  }
`;

export default NotificationListStyles;
