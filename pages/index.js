import React, { useState, useContext } from "react"
import Image from "next/image"
import Link from "next/link"
import axios from "axios"
import AuthComponent, { FormsWrapper, MembershipWrapper } from '../styles/AuthComponent.styles'
import GlobalsStyles from '../styles/Globals.styles'
import { useRouter } from "next/router"
import { AuthContext } from '../context/AuthContext'




export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [userData, setUser] = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("clicked");
    const user = await fetch("https://9c7b96957c5b.ngrok.io/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        memberid_email: email,
        password
      })
    });
    const userData = await user.json()
    if (user.status === 200) {
      setUser(userData);
      router.push("/dashboard");
    } else if (user.status === 404) {
      setIsError(true);
    }

  }
  return (
    <>
      <GlobalsStyles />
      <AuthComponent>
        <FormsWrapper>

          <nav>
            <div className="logo-wrapper">
              <Image src="/logo.svg" height="100" width="300" />
            </div>
          </nav>
          <div className="forms-wrapper-body">
            <div>
              <div className="go-back-btn">
                <Link href="/"><a>Go Back</a></Link>
              </div>
            </div>

            <h1 className="member-login">Member Login</h1>
            <p className={`invalid-error ${isError ? `show-error` : `hide-error`}`}>Wrong email address or password. Forgot your password?</p>
            <form onSubmit={handleSubmit}>
              <div className="email-entry input-wrapper">

                <label>Member Id or Email</label>
                <div className="input-wrapper">
                  <div>
                    <input type="text" onChange={e => setEmail(e.target.value)} placeholder="Enter your ID or Email Address" />
                  </div>
                  <div>
                    <Image src="/pass.svg" width="15" height="15" alt="Email icon" />
                  </div>
                </div>

              </div>
              <div className="password-entry input-wrapper">

                <label>Password</label>
                <div className="input-wrapper">
                  <input type="text" onChange={e => setPassword(e.target.value)} placeholder="Enter your password" />
                  <Image src="/password.svg" width="15" height="15" alt="Password icon" />
                </div>
              </div>
              <div className="reset-password-div">
                <p>Keep me signed in </p>
                <Link href="/"><a>Reset Password</a></Link>
              </div>
              <input type="submit" value="Login" className="submit-btn" />
            </form>

          </div>

        </FormsWrapper>
        <MembershipWrapper>
          <div className="container">
            <div className="membership-text">
              <p>HI THERE!</p>
              <p>WELCOME TO</p>
              <p>THE ONLINE COMMUNITY OF</p>
              <p>NAPE MEMBERS.</p>
            </div>
            <div className="membership-type-div">
              <button className="individual-membership-btn">Individual Membership</button>
              <button className="corporate-membership-btn">Corprate Membership</button>
            </div>
            <div className="membership-note-div">
              <p>
                Please note that an applicant for ACTIVE membership of the association must be a person engaged in the practice or teaching of the geosciences or petroleum related science provided he/she holds at least a Bachelor's Degree from an Educational Institution of acceptable academic standards. This is in addition to at least three (3) years of work experience (post NYSC) in the practice or teaching of the geosciences or petroleum related science. Credit for experience can be counted as follows: Master’s: one (1) year; Doctorate: two (two) years. Apply Now
            </p>
            </div>
          </div>

        </MembershipWrapper>
        <div className="quick-actions">
          <h3>
            Quick Actions
          </h3>
        </div>
      </AuthComponent>
    </>
  )
}
