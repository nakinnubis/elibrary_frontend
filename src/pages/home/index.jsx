import React, { useState, useContext } from "react"
import {Link, useHistory} from 'react-router-dom'
// import { CommonLoading } from 'react-loadingg';
import Logo from '../../assets/logo.svg'
import Profileicon from '../../assets/profile-icon.svg';
import Padlock from '../../assets/padlock.svg';
import { AuthStyles, FormContainer, MembershipContainer, NavWrapper, InputContainer } from '../../styles/AuthStyles'
import { AuthContext } from '../../context/AuthContext'

export default function Home() {
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")
  const [isError, setIsError] = useState(false)
  const [userData, setUser] = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [memberStatus, setMemberStatus] = useState("")
  const {push} = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const user = await fetch("http://46.101.62.161:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ApiKey": "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c",
      },
      body: JSON.stringify({
        memberid_email: email,
        password: password
      })
    })

    const userStatus = await fetch("http://46.101.62.161:5000/api/AnnualDue/CheckMembershipStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ApiKey": "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c",
      },
      body: JSON.stringify({
        memberid_email: email,
        password: password
      })
    })

    const userStatusData = await userStatus.json();
    const userData = await user.json();
    console.log(user.status);
    if (user.status === 200) {
      setUser(userData.message);
      setMemberStatus(userStatusData.message)
      window.localStorage.setItem("memStatus", JSON.stringify(userStatusData.message))
      window.localStorage.setItem("user",JSON.stringify(userData.message))
      setLoading(false)
      console.log("Login: ", userData)
      console.log("hhhhh", userStatusData)
      push("/dashboard");
    } else if (user.status === 404) {
      setLoading(false)
      setIsError(true);

    } else {
      setLoading(false);
      setIsError(true);
    }
  }
  return (
    <AuthStyles>
      <FormContainer>
        <NavWrapper>
          <div className="wrapper flex">
            <div>
              <img src={Logo} height="100" width="250" />
            </div>
          </div>
        </NavWrapper>
        <div className="wrapper form-body">
          <Link to="/">
              <div className="back-btn">
                Go back
            </div>
          </Link>
          <h1 className="member-login">Member Login</h1>
        </div>
        <InputContainer className="wrapper" onSubmit={handleSubmit}>
          <div className={`error ${isError ? "block" : "none"}`}>
            <p>Wrong email address or password. Forgot your password?</p>
          </div>
          <div className="input-field">
            <label>Member ID or Email</label>
            <div className="input-form-wrapper">
              <input type="text" placeholder="Enter your Id or Email address" value={email} onChange={(e) => setemail(e.target.value)} />
              <div className="input-image-wrapper">
                {/* <img src={Profileicon} /> */}
              </div>
            </div>
            {
              loading ? "Loading..." : ""
            }

          </div>
          <div className="input-field mt-40">
            <label>Password</label>
            <div className="input-form-wrapper">
              <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <div className="input-image-wrapper">
                <img src={Padlock}  />
              </div>
            </div>
          </div>
          <div>

          </div>
          <input type="submit" value="Submit" className="submit-btn" />
        </InputContainer>


      </FormContainer>
      <MembershipContainer >
        <div className="wrapper">
          <div className="text-container">
            <h1>Hi There!</h1>
            <h1>Welcome To</h1>
            <h1>The Online community of</h1>
            <h1>Nape Members</h1>
          </div>
          <div className="account-selection-btns">
            <Link to="/" className="white-bg">Individual Members</Link>
            <Link to="/" className="black-bg">Corporate Members</Link>
          </div>
          <div className="terms-and-conditions-div">
            <p>Please note that an applicant for ACTIVE membership of the association must be a person engaged in the practice or teaching of the geosciences or petroleum related science provided he/she holds at least a Bachelor's Degree from an Educational Institution of acceptable academic standards. This is in addition to at least three (3) years of work experience (post NYSC) in the practice or teaching of the geosciences or petroleum related science. Credit for experience can be counted as follows: Master’s: one (1) year; Doctorate: two (two) years. Apply Now </p>
          </div>
        </div>


      </MembershipContainer>
    </AuthStyles>
  )
}
