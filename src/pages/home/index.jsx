import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Profileicon from "../../assets/profile-icon.svg";
import Padlock from "../../assets/padlock.svg";
import {Spinner} from "react-bootstrap"
import {
  AuthStyles,
  FormContainer,
  MembershipContainer,
  NavWrapper,
  InputContainer
} from "../../styles/AuthStyles";
import { AuthContext } from "../../context/AuthContext";

export default function MemLogin() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [userData, setUser] = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [memberStatus, setMemberStatus] = useState("");
  const [PassType, setPassType] = useState(true)
  const history = useHistory();
  const [loginType, setLoginType] = useState("Member");
  const [activeState, setActiveState] = useState(false);
  const [btnBg, setBtnBg] = useState("black-bg");
  const [individualBg, setIndividualBg] = useState("white-bg");
  const [corporateBg, setCorporateBg] = useState("black-bg");

  const individualMember = () => {
    setIndividualBg("white-bg");
    setCorporateBg("black-bg");
    setLoginType("Member");
  };

  const corporateMember = () => {
    setIndividualBg("black-bg");
    setCorporateBg("white-bg");
    setLoginType("Corporate");
  };

  const switchUser = () => {
    loginType === "Member" ? setLoginType("Corporate") : setLoginType("Member");
  };

  const switchPassword = () => {
    setPassType(!PassType);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    fetch("http://102.130.127.119:80/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ApiKey:
          "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c"
      },
      body: JSON.stringify({
        memberid_email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(userData => {
        fetch("http://102.130.127.119:80/api/AnnualDue/CheckMembershipStatus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ApiKey:
              "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c"
          },
          body: JSON.stringify({
            memberid_email: email,
            password: password
          })
        })
          .then(res => res.json())
          .then(userStatusData => {
            //setMemberStatus(userStatusData.message)
            window.localStorage.setItem(
              "memStatus",
              JSON.stringify(userStatusData.data)
            );

            setUser(userData.message);
            window.localStorage.setItem("user", JSON.stringify(userData.data));
            setLoading(false);
            console.log("Login: ", userData);
            history.replace("/dashboard");

            return { userData, userStatusData };
          })
          .catch(err => {
            setIsError(true);
            setLoading(false);
            console.log({ err });
          });
      })
      .catch(err => {
        setIsError(true);
        setLoading(false);
        console.log({ err });
      });
  };
  return (
    <AuthStyles>
      <FormContainer>
        <NavWrapper>
          <div className="wrapper flex">
            <div>
              <img src={Logo} height="100" width="250" alt="" />
            </div>
          </div>
        </NavWrapper>
        <div className="wrapper form-body">
          <Link to="/">
            <div className="back-btn">Go back</div>
          </Link>
          <h1 className="member-login">{loginType} Login</h1>
        </div>
        <InputContainer className="wrapper" onSubmit={handleSubmit}>
          <div className={`error ${isError ? "block" : "none"}`}>
            <p>Wrong email address or password. Forgot your password?</p>
          </div>
          <div className="input-field">
            <label>{loginType} ID or Email</label>
            <div className="input-form-wrapper">
              <input
                type="text"
                placeholder="Enter your Id or Email address"
                value={email}
                onChange={e => setemail(e.target.value)}
              />
              <div className="input-image-wrapper">
                {/* <img src={Profileicon} /> */}
              </div>
            </div>
          </div>
          <div className="input-field mt-40">
            <label>Password</label>
            <div className="input-form-wrapper">
              <input
                type={ PassType ? "password" : "Text"}
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <div className="input-image-wrapper">
                <img src={Padlock} alt="" onClick={switchPassword}/>
              </div>
            </div>
          </div>
          <span className="spinner"> {loading ? (<Spinner animation="grow" />) : ""} </span>
          <input type="submit" value="Submit" className="submit-btn" />

          <div className="switch-user" onClick={switchUser}>
            Switch to <span className="switch-link">{loginType === "Member" ? "Corporate": "Member"}</span>
          </div>
        </InputContainer>
      </FormContainer>
      <MembershipContainer>
        <div className="wrapper">
          <div className="text-container">
            <h1>Hi There!</h1>
            <h1>Welcome To</h1>
            <h1>The Online community of</h1>
            <h1>Nape Members</h1>
          </div>
          <div className="account-selection-btns">
            <button className={individualBg} onClick={individualMember}>
              Individual Members
            </button>
            <button className={corporateBg} onClick={corporateMember}>
              Corporate Members
            </button>
          </div>
          <div className="terms-and-conditions-div">
            <p>
              Please note that an applicant for ACTIVE membership of the
              association must be a person engaged in the practice or teaching
              of the geosciences or petroleum related science provided he/she
              holds at least a Bachelor's Degree from an Educational Institution
              of acceptable academic standards. This is in addition to at least
              three (3) years of work experience (post NYSC) in the practice or
              teaching of the geosciences or petroleum related science. Credit
              for experience can be counted as follows: Master’s: one (1) year;
              Doctorate: two (two) years. Apply Now
            </p>
          </div>
        </div>
      </MembershipContainer>
    </AuthStyles>
  );
}
