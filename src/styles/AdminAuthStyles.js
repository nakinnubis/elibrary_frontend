import styled from "styled-components/macro";

export const AdminAuthStyles = styled.div`
  .form-container {
    width: 80vw;
    height: auto;
    margin: 3rem auto 0 auto;
  }
  .member-login {
    font-weight: bold;
    font-size: 48px;
    line-height: 72px;
    color: #777777;
  }
  .pwd-control {
    color: red;
    cursor: default;
  }

  @media screen and (max-width: 678px) {
    .form-container {
      width: 100%;
    }
  }
`;

export const FormContainer = styled.div`
  background: #e5e5e5;

  .member-login {
    color: #777777;
    font-weight: bold;
    font-size: 2em;
    margin: 40px 0;
  }
`;

export const AddFormModalStyle = styled.div`
  /* padding: 3rem 2rem; */
  box-sizing: border-box;

  .success-modal {
    padding: 3rem 0;

    text-align: center;
    .info {
      padding: 2rem;
      border-bottom: 1px solid #e5e5e5;
      overflow-wrap: break-word;
      p:first-of-type {
        margin-bottom: 1rem;
      }

      p:not(:first-of-type) {
        color: #105939;
        font-weight: bold;
        font-size: 1.5rem;
      }
    }

    button {
      border: 1px solid #008753;
      color: #008753;
      background-color: #fff;
      border-radius: 3px;
      padding: 1rem;
      width: 70%;
      margin-top: 1rem;
    }
  }

  form {
    padding: 3rem 2rem;
  }
  .form-header {
    font-weight: 800;
    font-size: 1.5rem;
    color: #000;
    display: flex;
    flex-direction: row;
    align-items: center;

    justify-content: space-between;
  }
  .closebtn {
    background: #000000;
    color: #fff;
    outline: none;
    border: none;
    font-size: 2rem;
    border-radius: 5px;
  }

  .form-input {
    border: 2px solid #68676f;
    border-radius: 3px;
    width: 100%;
    margin: 1.5rem 0;
    padding: 0.5rem 0.8rem;
    outline: none;
  }
  .form-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  .form-footer button {
    width: 45%;
    border: 2px solid #075f49;
    border-radius: 5px;
    padding: 1rem;
  }

  .green-bg {
    background: #055844;
    color: #ffffff;
    border: none;
  }
  .white-bg {
    color: #075f49;
  }
`;
export const AddBookModalStyle = styled.div`
  padding: 3rem 2rem;
  font-size: 0.875rem;
  box-sizing: border-box;
  small-text {
    font-size: 0.6rem;
  }

  .hidden {
    display: none;
  }
  .padded {
    align-items: center;
    padding: 5px;
  }
  .m-top {
    margin-top: 1.5rem;
  }
  .upload-doc {
    width: 100%;
    background: rgba(177, 224, 35, 0.1);
    border: 1px solid #055844;
    border-radius: 5px;
    text-align: center;
    padding: 0.5rem 0;
    height: 100%;
  }

  label {
    margin-bottom: 0.5rem;
  }

  /* .upload-img {
  } */

  .upload-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    padding: 0.5rem;
  }

  input,
  select,
  textarea,
  .padded {
    border: 1px solid rgba(127, 139, 148, 0.5);
    border-radius: 3px;
    height: 2rem;
  }

  textarea {
    height: 4rem;
  }
  input:focus,
  select:focus,
  textarea:focus {
    border: 1px solid rgba(127, 139, 148, 0.9);
    outline: none;
  }
  // toggle switch
  .switch {
    position: relative;
    display: inline-block;
    width: 2.5rem;
    height: 1.2rem;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    /* height: 100%; */
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1rem;
    width: 1rem;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #055844;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(1rem);
    -ms-transform: translateX(1rem);
    transform: translateX(1.2rem);
  }

  .slider.round {
    border-radius: 1rem;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .flex-apart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    align-items: center;
  }
  .upload-basic-top input {
    width: 100%;
    padding: 1.2rem;
  }

  .description textarea {
    width: 100%;
    padding: 0.5rem;
  }
  .half-width {
    width: 47%;

    input {
      width: 100%;
      padding: 1.2rem 0;
    }
  }

  .price {
    width: 47%;
    height: 100%;

    .price-switch {
      display: flex;
      justify-content: space-between;
      input {
        height: 100%;
      }
    }
  }

  .half-width input,
  .half-width select,
  .tags input {
    width: 100%;
    padding: 1.2rem;
  }
  .upload-basic-bottom input {
  }

  .optional {
    background: #f5f5f5;
    height: 2rem;
    padding: 0.5rem 1rem;
    margin: 1rem 0;
  }
  .form-header {
    font-weight: 800;
    font-size: 1.5rem;
    color: #000;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    padding-bottom: 1rem;
  }
  .closebtn {
    background: #000000;
    color: #fff;
    outline: none;
    border: none;
    font-size: 2rem;
    border-radius: 0.2rem;
  }
  .upload-image {
    margin-right: 1rem;
  }
  .upload-span {
    font-weight: 800;
    font-size: 14px;
    text-align: center;
    color: #055844;
    padding-left: 1rem;
  }
  .upload-basics {
    padding: 1rem 0;
  }
  .amount {
    // display:none;
  }

  .upload-img {
    width: 25%;
    /* height: 8rem; */
    background: #f9fbf8;
    border: 1px solid #ced4da;
    border-radius: 5px;
    text-align: center;
    overflow-y: hidden;

    img {
      width: 100%;
      background-position: cover;
    }

    @media (max-width: 991px) {
      p {
        display: none;
      }
    }
  }
  .upload-img label {
    /* margin: 1.5rem auto; */
  }
  .upload-basics-right {
    width: 70%;
  }
  .form-input {
    border: 2px solid #68676f;
    border-radius: 3px;
    width: 100%;
    margin: 1.5rem 0;
  }
  .form-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 3rem;
  }
  .form-footer button {
    width: 40%;
    border: 2px solid #075f49;
    border-radius: 5px;
    /* height: 2rem; */
    padding: 1rem 0;
  }

  .green-bg {
    background: #055844;
    color: #ffffff;
    border: none;
  }
  .white-bg {
    color: #075f49;
  }

  @media (max-width: 991px) {
    .upload-basics {
      flex-direction: column;

      .upload-img {
        width: 50%;
        /* padding: 0 3rem; */
        display: cover;

        height: 8rem;
        display: flex;
        width: 50%;
        display: cover;
        align-items: center;
        justify-content: center;

        input {
          width: 100%;
          height: 100%;
        }

        img {
          background-size: cover;
        }
      }

      .upload-basics-right {
        width: 100%;
      }
    }

    .access-rights {
      flex-direction: column;

      .half-width {
        width: 100%;
      }

      .price {
        width: 100%;
        /* border: 1px solid red; */
        margin-top: 2rem;

        .price-switch-input {
          border: 1px solid yellowgreen;
          width: 47%;
        }
      }
    }
  }

  @media (max-width: 479px) {
    .price {
      .price-switch {
        flex-direction: column;
        /* border: 1px solid red; */

        .price-switch-input {
          width: 100%;
          margin-bottom: 1rem;
          padding: 10px;
        }
      }

      .price-input input {
        /* font-size: 1rem; */
        padding: 10px;
        width: 100%;
      }
    }

    .book-details {
      .flex-apart {
        flex-direction: column;
        width: 100%;

        .half-width {
          width: 100%;

          input {
            margin-bottom: 1rem;
          }
        }
      }
    }

    .form-footer {
      flex-direction: column-reverse;

      button {
        width: 100%;
        margin: auto;
      }

      button:not(:last-of-type) {
        margin-top: 1.5rem;
      }
    }
  }
`;

export const MembershipContainer = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/auth-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  .text-container {
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    line-height: 1.3;
    margin-top: 150px;
    h1 {
      text-transform: uppercase;
    }
  }
  .account-selection-btns {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    justify-content: center;
    margin-top: 100px;
    a {
      color: #fff;
      text-align: center;
      &.white-bg {
        background: #fff;
        color: #777777;
        font-size: 14px;
        font-weight: bold;
        padding: 15px 20px;
      }
      &.black-bg {
        background: rgba(119, 119, 119, 0.5);
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        padding: 15px 20px;
      }
    }
    button {
      text-align: center;
      &.white-bg {
        background: #fff;
        color: #777777;
        font-size: 14px;
        font-weight: bold;
        padding: 15px 20px;
      }
      &.black-bg {
        background: rgba(119, 119, 119, 0.5);
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        padding: 15px 20px;
      }
    }
  }
  .terms-and-conditions-div {
    background: rgba(119, 119, 119, 0.3);
    color: #fff;
    margin-top: 50px;
    padding: 20px;

    p {
      line-height: 1.2;
      opacity: 0.8;
      font-size: 14px;
    }
  }
`;

export const NavWrapper = styled.div`
  background: #055844;
  height: 15vh;

  .flex {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
export const InputContainer = styled.form`
  // outline: 1px solid red;
  margin: 0 auto;
  max-width: 40rem;
  // position: relative;

  .input-setting {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem 0;

    input {
      margin-right: 5px;
    }
    @media screen and (max-width: 678px) {
      a {
        font-size: 15px;
      }
    }
  }
  .error {
    margin: 20px 0;
    p {
      text-align: center;
      color: red;
    }
  }
  .block {
    display: block;
  }
  .none {
    display: none;
  }

  .mt-40 {
    margin-top: 20px;
  }
  .submit-btn {
    background: #055844;
    color: #fff;
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 15px 0;
    font-size: 20px;
    margin-top: 20px;
    height: 4rem;
    outline: none;
  }

  .spinner {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .input-field {
    background: #fff;
    padding: 15px;
    border-radius: 5px;
    padding-left: 20px;
    height: 8.37rem;
    box-shadow: 0px 20px 70px rgba(0, 0, 0, 0.06);

    label {
      font-size: 14px;
    }

    .input-form-wrapper {
      display: grid;
      grid-template-columns: 90% 10%;
      align-items: center;
      margin-top: 10px;
      input {
        border: none;
        padding: 10px 0;
        outline: none;
        color: #777;
      }
    }
    .input-image-wrapper {
      width: 15px;
      height: 15px;
      position: relative;
      display: flex;
      align-items: flex-end;
      cursor: pointer;

      @media screen and (max-width: 678px) {
        img {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
`;
