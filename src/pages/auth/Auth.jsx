import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Login from "../../components/login/Login";
import { useNavigate, useLocation } from "react-router";
import { useSignup } from "../../hooks/useSignup";
import { useLogin } from "../../hooks/useLogin";
import "./Auth.scss";

export default function Auth() {
    const { type } = useParams();
    const [pageType, setPageType] = useState();

    const location = useLocation();
    const queryString = location.search;
    const queryParams = new URLSearchParams(queryString);

    const clickType = queryParams.get("click-type");
    const userType =
        queryParams.get("user-type") === "buisness" ? "salonOwner" : "customer";

    const {
        signup,
        error: signupError,
        isPending: signupIsPending,
    } = useSignup();
    const { login, error: loginError, isPending: loginIsPending } = useLogin();
    let navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPhoneNumber, setUserPhoneNumber] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const checkAndLeave = (error, redirectToPath) => {
        if (error) {
            console.log(error.message);
        } else {
            // setTimeout(() => props.fun(false), 1000);
            navigate(`/${redirectToPath}`, { replace: true });
        }
    };

    useEffect(() => {
        console.log(loginIsPending, loginError);
    }, [loginIsPending, loginError]);

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        signup(userEmail, userPassword, userName, userPhoneNumber, userType);
        let path =
            queryParams.get("user-type") === "buisness"
                ? "/add-buisness-details"
                : "/salonsNearby";
        if (signupError) {
            console.log(signupError.message);
        }
        return navigate(path, { replace: true });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        login(userEmail, userPassword);
        let path =
            queryParams.get("user-type") === "buisness"
                ? "/dashboard"
                : "/salonsNearby";
        if (loginError) {
            console.log(loginError.message);
        }

        return navigate(path, { replace: true });
    };

    return (
        <>
            <div className="form-wrapper">
                {clickType === "login" ? (
                    <>
                        <div id="login-form">
                            <p className="login-title">Login</p>
                            <div className="login-hr" />
                            <div className="account">
                                Don't Have Account?{""}
                                <button
                                    className="form-type-toggle"
                                    onClick={() =>
                                        navigate(
                                            `/auth?user-type=${queryParams.get(
                                                "user-type"
                                            )}&click-type=signup`,
                                            { replace: true }
                                        )
                                    }
                                >
                                    Register Now
                                </button>
                            </div>

                            <>
                                <form onSubmit={handleLoginSubmit}>
                                    <div className="form-group login-sj">
                                        <label htmlFor="exampleInputEmail1">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"
                                            value={userEmail}
                                            onChange={(e) =>
                                                setUserEmail(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="form-group login-sj">
                                        <label htmlFor="exampleInputPassword1">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Password"
                                            value={userPassword}
                                            onChange={(e) =>
                                                setUserPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                    {loginIsPending ? (
                                        <>
                                            <button
                                                type="submit"
                                                className="btn-auth-sj btn btn-primary"
                                                disabled
                                            >
                                                Login
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                type="submit"
                                                className="btn-auth-sj btn btn-primary"
                                            >
                                                Login
                                            </button>
                                        </>
                                    )}
                                </form>
                            </>
                        </div>
                    </>
                ) : (
                    <>
                        <div id="register-form">
                            <p className="login-title register-title">
                                Register
                            </p>
                            <div className="login-hr" />
                            <div className="account">
                                Already have an Account?{" "}
                                <button
                                    className="form-type-toggle"
                                    onClick={() =>
                                        navigate(
                                            `/auth?user-type=${queryParams.get(
                                                "user-type"
                                            )}&click-type=login`,
                                            { replace: true }
                                        )
                                    }
                                >
                                    Login Now
                                </button>
                            </div>
                            <>
                                <form onSubmit={handleRegisterSubmit}>
                                    <div className="form-group login-sj">
                                        <label htmlFor="exampleInputName1">
                                            Name:
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputName1"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"
                                            value={userName}
                                            onChange={(e) =>
                                                setUserName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="form-group login-sj">
                                        <label htmlFor="exampleInputEmail2">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail2"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"
                                            value={userEmail}
                                            onChange={(e) =>
                                                setUserEmail(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="form-group login-sj">
                                        <label htmlFor="exampleInputPassword1">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword2"
                                            placeholder="Password"
                                            value={userPassword}
                                            onChange={(e) =>
                                                setUserPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                    {signupIsPending ? (
                                        <>
                                            <button
                                                type="submit"
                                                className="btn-auth-sj btn btn-primary"
                                                disabled
                                            >
                                                Register
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                type="submit"
                                                className="btn-auth-sj btn btn-primary"
                                            >
                                                Register
                                            </button>
                                        </>
                                    )}
                                </form>
                            </>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
