import React, { useState, useEffect } from "react";
import "./navbar.scss";
import PersonIcon from "@material-ui/icons/Person";

import logo from "../../assets/img1.png";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import profile from "../../assets/profile.png";
import { Dropdown } from "react-bootstrap";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import { useUser } from "../../hooks/useUser";

const Navbar = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [userFromDB, setUserFromDB] = useState({});

    const { user: userContext } = useAuthContext();
    const { logout } = useLogout();
    const [show, setShow] = useState(false);
    const { user } = props;

    const queryString = location.search;
    const queryParams = new URLSearchParams(queryString);
    const clickType = queryParams.get("click-type");

    return (
        <>
            <nav>
                <div className="brand">
                    <div className="brand-wrapper">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="navigation">
                    <div className="link-wrapper">
                        <NavLink
                            onClick={() => setShow(false)}
                            style={{
                                textDecoration: "none",
                                color: "black",
                                // margin: "0px 10px 0px 10px",
                            }}
                            to="/"
                        >
                            <p
                                className={`nav-link-text ${
                                    location.pathname === "/" ? "active" : null
                                }`}
                            >
                                Home
                            </p>
                        </NavLink>

                        <div
                            className={`hr ${
                                location.pathname === "/" ? "active" : null
                            }`}
                        ></div>
                    </div>
                    <div className="link-wrapper">
                        <NavLink
                            onClick={() => setShow(false)}
                            style={{
                                textDecoration: "none",
                                color: "black",
                                // margin: "0px 10px 0px 10px",
                            }}
                            to="/salonsNearby"
                        >
                            <p
                                className={`nav-link-text ${
                                    location.pathname === "/salonsNearby"
                                        ? "active"
                                        : null
                                }`}
                            >
                                Salons Nearby
                            </p>
                        </NavLink>

                        <div
                            className={`hr ${
                                location.pathname === "/salonsNearby"
                                    ? "active"
                                    : null
                            }`}
                        ></div>
                    </div>
                    {userContext && (
                        <>
                            <div className="link-wrapper">
                                <NavLink
                                    onClick={() => setShow(false)}
                                    style={{
                                        textDecoration: "none",
                                        color: "black",
                                        // margin: "0px 10px 0px 10px",
                                    }}
                                    to="/dashboard"
                                >
                                    <p
                                        className={`nav-link-text ${
                                            location.pathname === "/dashboard"
                                                ? "active"
                                                : null
                                        }`}
                                    >
                                        Dashboard
                                    </p>
                                </NavLink>

                                <div
                                    className={`hr ${
                                        location.pathname === "/dashboard"
                                            ? "active"
                                            : null
                                    }`}
                                ></div>
                            </div>
                        </>
                    )}
                </div>
                {!userContext ? (
                    <>
                        <div className="no-user">
                            <div className="link-wrapper">
                                <NavLink
                                    onClick={() => setShow(false)}
                                    style={{
                                        textDecoration: "none",
                                        color: "black",
                                        // margin: "0px 10px 0px 10px",
                                    }}
                                    to="/user-flow?click-type=signup"
                                >
                                    <p
                                        className={`nav-link-text ${
                                            clickType === "signup"
                                                ? "active"
                                                : null
                                        }`}
                                    >
                                        Signup
                                    </p>
                                </NavLink>

                                <div
                                    className={`hr ${
                                        clickType === "signup" ? "active" : null
                                    }`}
                                ></div>
                            </div>
                            <hr className="signup" />
                            <div className="link-wrapper">
                                <NavLink
                                    onClick={() => setShow(false)}
                                    style={{
                                        textDecoration: "none",
                                        color: "black",
                                        // margin: "0px 10px 0px 10px",
                                    }}
                                    to="/user-flow?click-type=login"
                                >
                                    <p
                                        className={`nav-link-text ${
                                            clickType === "login"
                                                ? "active"
                                                : null
                                        }`}
                                    >
                                        Login
                                    </p>
                                </NavLink>

                                <div
                                    className={`hr ${
                                        clickType === "login" ? "active" : null
                                    }`}
                                ></div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="profile">
                            <NavLink
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                    // margin: "0px 10px 0px 10px",
                                }}
                                to={`/profile/${userContext.uid}`}
                            >
								{userContext.photoURL ? <>
									<div className="profile-wrapper">
                                    <img src={userContext.photoURL} alt="Profile" />
                                </div>
								</> : <>
								<div className="profile-wrapper">
                                    <img src={profile} alt="Profile" />
                                </div>
								</>}
                                
                            </NavLink>

                            <hr className="signup" />
                        </div>
                    </>
                )}
            </nav>
        </>
    );
};

export default Navbar;
