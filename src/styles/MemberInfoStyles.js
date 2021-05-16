import styled from "styled-components/macro";

const MemberInfoStyles = styled.section`
  .row-custom {
    padding: 0;
    /* margin-top: 5rem; */
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      padding: 0 2rem;
    }

    .col-custom {
      padding: 0.75rem;

      .wel-h2 {
        font-weight: 800;
        font-size: 1.5rem;
        line-height: 2.25rem;

        @media (max-width: 991px) {
          font-size: 1.2rem;
        }
      }

      .wel-details {
        display: flex;
        flex-flow: row wrap;
        @media (max-width: 991px) {
          flex-direction: column;
        }
      }

      .wel-box {
        width: 67%;
        margin-right: 3%;
      }

      .wel-msg {
        width: 30%;
      }
      .wel-box,
      .wel-msg {
        border-radius: 4px;

        background: #ffffff;
        border: 1px solid #efefef;
        box-sizing: border-box;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        padding: 0.625rem;
        /* outline: 1px solid green; */

        @media (max-width: 991px) {
          width: 100%;
          img {
            width: max-content;
          }
        }
      }

      .wel-box .mem-id {
        color: #055844;
        font-weight: bold;
      }
      .wel-box .active {
        background: rgba(177, 224, 35, 0.1);
        border: none;
        border-radius: 3px;
        font-family: Poppins;
        font-weight: bold;
        font-size: 0.75rem;
        line-height: 1.125rem;
        color: #b1e023;
        outline: none;
        padding: 0 2rem;
      }

      .wel-msg img {
        height: 1.4rem;
        /* align-self: center; */
        /* outline:1px solid red; */
      }
      .wel-msg p {
        font-family: Poppins;
        font-weight: normal;
        font-size: 0.9rem;
        line-height: 1.125rem;
        color: #777777;
        /* align-self: baseline; */
        /* outline:1px solid green; */
      }

      .connect {
        border: 1px solid grey;
        border-radius: 4px;
        height: auto;
        background: #ffffff;
        border: 1px solid #efefef;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 0.625rem;
      }
      .connect .box {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
      }
      .connect .box input {
        padding: 0.625rem;
        background: #ffffff;
        border: 1px solid #efefef;
        border-radius: 3px;
      }

      .connect .box input::placeholder {
        font-size: 0.8rem;
      }
      
      .connect .box button {
        background: #075f49;
        border-radius: 3px;
        color: #ffffff;
        padding: 0.5rem 2rem;
        outline: none;
        border: none;

        @media (max-width: 991px) {
          font-size: 1rem;
        }
        @media (max-width: 768px) {
          font-size: 0.8rem;
          padding: 0.5rem 1rem;
        }
      }
      .connect p {
        font-size: 0.9rem;
        line-height: 1.125rem;
        color: #777777;
      }
    }
  }
  /* 
  @media only screen and (max-width: 990px) {
    .msg-span {
      display: none;
    }
    .wel-msg {
      width: auto;
    }
    .wel-msg img {
      padding-right: 1rem;
    }

    .wel-h2 {
      font-size: 1.2rem;
    }
  } */
`;

export default MemberInfoStyles;
