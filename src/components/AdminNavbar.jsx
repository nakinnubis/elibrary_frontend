import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { NavbarContainer } from "../styles/NavbarContainer";
import { useWindowWidthAndHeight } from "./CustomHooks";
import Logo from "../assets/logo.svg";
import Downarrow from "../assets//down-arrow.svg";
import ProfilePic from "../assets/profile-img.png";
import Profileicon from "../assets/profile-icon.svg";
import Dashboard from "../assets/dashboard.svg";
import Resources from "../assets/resources.svg";
import Election from "../assets/election.svg";
import Membercard from "../assets/member-card.svg";
import Elibrary from "../assets/e-library.svg";
import OnlinePayment from "../assets/online-payment.svg";
import Payment from "../assets/payments.svg";
import Certificate from "../assets/certificate.svg";

const AdminNavbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [admin, setAdmin] = useState("");
  // use our custom hook to get the the window size
  const [width] = useWindowWidthAndHeight();
  // declare 'translate' as a state variable
  let [translate, setTranslate] = useState(true);
  
  let history = useHistory();
  useEffect(() => {
    let user = JSON.parse(global.localStorage.getItem("admin"));
     if (!user || user === "undefined") {
      history.push("/");
    } else {
      setAdmin(user);
    }
  }, [history]);
  
  const logout = () => {
    window.localStorage.clear();
    history.push("/");
  };
  return (
    <NavbarContainer>
      {width > 920 ? (
        <div className="wrapper nav sticky-top">
          <a href="https://nape.org.ng">
            <div className="logo">
              <img src={Logo} width="250" height="100" />
            </div>
          </a>
          <div className="profile-side">
            <div className="profile-text">
              <div className="profile-name">
                <p
                  // onFocus={(e) => setDropdown(!dropdown)}
                  // onBlur={(e) => setDropdown(!dropdown)}
                  onClick={(e) => setDropdown(!dropdown)}

                  tabIndex={0}
                >
                  {" "}
                  {admin?.username}
                </p>
                <div className={`drop-down ${dropdown ? "show" : "hide"}`}>
                  <ul>
                    <li>Settings</li>
                    <li>Change Password</li>
                    <li>Visit Website</li>
                    <li onClick={logout}>
                      <span>Logout</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="down-arrow">
                <img
                  src={Downarrow}
                  alt=""
                  onClick={(e) => setDropdown(!dropdown)}
                />
              </div>
            </div>
            <div className="profile-img">{/* <img src={ProfilePic} /> */}</div>
          </div>
        </div>
      ) : (
        <>
          <nav className="wrapper sticky-top">
            <a href="https://nape.org.ng/">
              <div className="logo">
                <img src={Logo} width="250" height="100" />
              </div>
            </a>

            <div className="profile-side">
              <div className="profile-hamburger">
                <a
                  className={`${
                    translate ? "addTransitonColor" : "removeTransitionColor"
                  } hamburger-btn nav-link`}
                  onClick={() => setTranslate(!translate)}
                >
                  {" "}
                  {/* toggle translate */}
                  {/* change the btn text based on whether translate is true or false */}
                  {translate ? (
                    <span>&#9776;</span>
                  ) : (
                    <span className="close-icon">&times;</span>
                  )}
                </a>
              </div>

              <div
                id="sidebar-list"
                className={`${translate ? "addTransiton" : "removeTransition"}`}
              >
                <div className="first-item pb-5">
                  <span
                    className="close-icon"
                    onClick={() => setTranslate(!translate)}
                  >
                    &times;
                  </span>
                  <div className="btn-link-custom">
                    <a
                      className="btn btn-link btn-sm dropdown-toggle text-secondary text-decoration-none custom-a"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {admin?.username}
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item drop-list" href="#">
                          Settings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item drop-list" href="#">
                          Change Password
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item drop-list" href="#">
                          Visit Website
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item drop-list"
                          onClick={() => window.localStorage.clear()}
                          href="#"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  href="/dashboard/dsgfh"
                  className="block"
                  onClick={() => setTranslate(!translate)}
                >
                  <span className="icon-cls">
                    <img src={Profileicon} width="20" height="20" />
                  </span>{" "}
                  My Profile
                </a>
                <a
                  href="/dashboard/safdjg"
                  className="block"
                  onClick={() => setTranslate(!translate)}
                >
                  <span className="icon-cls">
                    <img src={Certificate} width="20" height="20" />
                  </span>{" "}
                  Certificate
                </a>
                <a
                  href="/dashboard/bdhjsgfh"
                  className="block"
                  onClick={() => setTranslate(!translate)}
                >
                  <span className="icon-cls">
                    <img src={Payment} width="20" height="20" />
                  </span>{" "}
                  Pay History
                </a>
                <a
                  href="/dashboard/bdhjsgfh"
                  className="block"
                  onClick={() => setTranslate(!translate)}
                >
                  <span className="icon-cls">
                    <img src={OnlinePayment} width="20" height="20" />
                  </span>{" "}
                  Pay Online
                </a>
                <a
                  href="/dashboard/member-portal-elibrary"
                  className="block"
                  onClick={() => setTranslate(!translate)}
                >
                  <span className="icon-cls">
                    <img src={Elibrary} width="20" height="20" />
                  </span>{" "}
                  E-Library
                </a>
                <a
                  href="/dashboard/bdhjsgfh"
                  className="block"
                  onClick={() => setTranslate(!translate)}
                >
                  <span className="icon-cls">
                    <img src={Membercard} width="20" height="20" />
                  </span>{" "}
                  Member Card
                </a>
                <a
                  href="/dashboard/bdhjsgfh"
                  className="block"
                  onClick={() => setTranslate(!translate)}
                >
                  <span className="icon-cls">
                    <img src={Election} width="20" height="20" />
                  </span>{" "}
                  Election
                </a>
                <a
                  href="/dashboard/bdhjsgfh"
                  className="block"
                  onClick={() => setTranslate(!translate)}
                >
                  <span className="icon-cls">
                    <img src={Resources} width="20" height="20" />
                  </span>{" "}
                  Resources
                </a>
              </div>
              {/* <Link to="/blog" className="block" onClick={() => setTranslate(!translate)}>Blog</Link> */}

              {/* <Link to="/sign_in"><CtmButton bk="#44B3E5" paddingSize="0 3.5rem" style={{ color: '#fff' }} className="block" onClick={() => setTranslate(!translate)}>
                Login
            </CtmButton></Link> */}
            </div>
          </nav>
        </>
      )}
    </NavbarContainer>
  );
};

export default AdminNavbar;
