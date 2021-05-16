import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Profileicon from "../../assets/profile-icon.svg";
import Padlock from "../../assets/padlock.svg";
import {Spinner} from "react-bootstrap"
import {
  AdminAuthStyles,
  FormContainer,
  MembershipContainer,
  NavWrapper,
  InputContainer
} from "../../styles/AdminAuthStyles";
import { AuthContext } from "../../context/AuthContext";

export default function Admin() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [userData, user, setUser] = useContext(AuthContext);
  const [userM, setUserM] = useState("");
  const [loading, setLoading] = useState(false);
  const [memberStatus, setMemberStatus] = useState("");
  const history = useHistory();
  // const [loginType, setLoginType] = useState("Member");
  const [activeState, setActiveState] = useState(false);
  const [btnBg, setBtnBg] = useState("black-bg");
  const [individualBg, setIndividualBg] = useState("white-bg");
  const [corporateBg, setCorporateBg] = useState("black-bg");
  const [values, setValues] = useState({
    password: "",
    showPassword: false
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const onChangeCheckbox = event => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    fetch("http://102.130.127.119:80/api/auth/AdminLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ApiKey:
          "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c"
      },
      body: JSON.stringify({
        MemberId_Email: email,
        Password: password
      })
    })
      .then(res => res.json())
      .then(userData => {
        setUserM(userData);
        if (userData.data) {
          window.localStorage.setItem("admin", JSON.stringify(userData.data));
          history.replace("/admin-dashboard");
        } else {
          history.push("/");
        }
      })
      .catch(err => {
        setLoading(false);
        console.log({ err });
      });
  };
  return (
    <>
      <AdminAuthStyles>
        <NavWrapper>
          <div className="wrapper flex">
            <div>
              <img src={Logo} height="100" width="250" alt="" />
            </div>
          </div>
        </NavWrapper>
        <div className="form-container" style={{}}>
          <div className="text-center form-body">
            <h1 className="member-login">Admin Login</h1>
          </div>
          <InputContainer className="wrapper" onSubmit={handleSubmit}>
            <div className={`error ${isError ? "block" : "none"}`}>
              <p>Wrong email address or password. Forgot your password?</p>
            </div>
            <div className="input-field">
              <label>Email</label>
              <div className="input-form-wrapper">
                <input
                  type="text"
                  placeholder="Enter your Id or Email address"
                  value={email}
                  onChange={e => setemail(e.target.value)}
                />
                <div className="input-image-wrapper">
                  <img src={Profileicon} alt="" />
                </div>
              </div>
            </div>
            <div className="input-field mt-40">
              <div className="input-form-wrapper">
                <label>Password</label>
              </div>
              <div className="input-form-wrapper">
                <input
                  type={values.showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <div className="input-image-wrapper">
                  <img src={Padlock} alt="" onClick={handleClickShowPassword} />
                </div>
              </div>
            </div>
            <div className="input-setting">
              <div>
                <input
                  clasName=""
                  type="checkbox"
                  checked={isChecked}
                  name="lsRememberMe"
                  onChange={onChangeCheckbox}
                />
                <label>Keep me logged in</label>
              </div>
              <Link to="/">RESET PASSWORD</Link>
            </div>
            <span className="spinner"> {loading ? (<Spinner animation="border" role="status" />) : ""} </span>
            <input type="submit" value="Submit" className="submit-btn"  />
          </InputContainer>
        </div>
      </AdminAuthStyles>
    </>
  );
}
