import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import "./profile.scss";

import { useAuthContext } from "../../hooks/useAuthContext";

import profile from "../../assets/profile.png";
import pro1 from "../../assets/pro1.png";
import pro2 from "../../assets/pro2.png";
import pro3 from "../../assets/pro3.png";

import LockIcon from "@material-ui/icons/Lock";
import Editprofile from "../../components/editprofile/Editprofile";
import Bookhistory from "../../components/booking_history/Bookhistory";
import Terms from "../../components/terms&conditions/Terms";
import Privacy from "../../components/privacypolicy/Privacy";
import Passpop from "../../components/Password_popup/Passpop";
import { useNavigate, useParams } from "react-router";
import { useLogout } from "../../hooks/useLogout";
import { useUser } from "../../hooks/useUser";

import { Button, Modal } from "react-bootstrap";
import { UpdateProfilePhoto } from "./UpdateProfilePhoto";
import { useUpdateProfilePhoto } from "../../hooks/useUpdateProfilePhoto";

const Profile = () => {
    const { user: userContext } = useAuthContext();
    const { updateProfilePhoto } = useUpdateProfilePhoto(userContext);

    const { userId } = useParams();
    const { user } = useUser(userId);
    let navigate = useNavigate();

    const [edit, setEdit] = useState(false);

    const [book, setBook] = useState(true);
    const [term, setTerm] = useState(false);
    const [policy, setPolicy] = useState(false);

    const [pop, setPop] = useState(false);

    const { logout } = useLogout();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <>
            <Editprofile show={edit} fun={setEdit} />

            <div className="proCon"></div>
            <div className="container proData">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 data">
                        <img
                            src={
                                userContext.photoURL
                                    ? userContext.photoURL
                                    : profile
                            }
                            alt="..."
                        />
                        <UpdateProfilePhoto />
                        {user && (
                            <div className="p">
                                {user.name} <br />
                                <span id="id">{user.email}</span> <br />
                                <span id="id">{user.type}</span> <br />
                                <button
                                    id="change"
                                    onClick={() => setPop(true)}
                                >
                                    <LockIcon fontSize="small" /> Change
                                    password
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 edit">
                        <button
                            onClick={handleLogout}
                            className="btn btn-primary "
                            id="logout"
                        >
                            Logout
                        </button>
                        {/* <div className="edit-button-wrapper">
                            <button
                                className="btn btn-dark"
                                onClick={() => navigate("/addBuisnessDetails")}
                            >
                                Edit business profile
                            </button>
                            <button
                                className="btn btn-dark"
                                onClick={() => navigate("/addSalonServices")}
                            >
                                Edit/Add Services
                            </button>
                            <button
                                className="btn btn-dark"
                                onClick={() => navigate("/addSalonSpecialists")}
                            >
                                Edit/Add Specialists
                            </button>
                            <button
                                className="btn btn-dark"
                                onClick={() => navigate("/addSalonTimings")}
                            >
                                Edit/Add Salon Timings
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="conatiner conditions">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 boxCon">
                        <button
                            id="button"
                            onClick={() => {
                                setBook(true);
                                setPolicy(false);
                                setTerm(false);
                            }}
                        >
                            <div className="box">
                                <img src={pro1} alt="" />
                                <p>Booking History</p>
                            </div>
                        </button>
                    </div>
                    <div className="col-xl-4 col-lg-4 boxCon">
                        <button
                            id="button"
                            onClick={() => {
                                setBook(false);
                                setPolicy(false);
                                setTerm(true);
                            }}
                        >
                            <div className="box">
                                <img src={pro2} alt="" />
                                <p>Terms & Conditions</p>
                            </div>
                        </button>
                    </div>
                    <div className="col-xl-4 col-lg-4 boxCon">
                        <button
                            id="button"
                            onClick={() => {
                                setBook(false);
                                setPolicy(true);
                                setTerm(false);
                            }}
                        >
                            <div className="box">
                                <img src={pro3} alt="" />
                                <p>Privacy Policy</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {book ? <Bookhistory type={user ? user.type : null} /> : null}
            {term ? <Terms /> : null}
            {policy ? <Privacy /> : null}

            {pop ? <Passpop fun={setPop} /> : null}

            <Footer />
        </>
    );
};

export default Profile;
