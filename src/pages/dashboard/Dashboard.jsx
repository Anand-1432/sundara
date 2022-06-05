import React, { useCallback, useEffect, useRef, useState } from "react";
import Chart from "../../components/Chart/Chart";
import Footer from "../../components/footer/Footer";
import "./dashboard.scss";
import Bookingcard from "../../components/booking_card/Bookingcard";

import j1 from "../../assets/j1.png";
import j2 from "../../assets/j2.png";
import j3 from "../../assets/j3.png";

import e1 from "../../assets/e1.jpg";
import e2 from "../../assets/e2.png";
import e3 from "../../assets/e3.jpg";

import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.jpg";
import b3 from "../../assets/b3.jpg";

import r2 from "../../assets/cat1.png";
import r3 from "../../assets/cat2.png";
import r4 from "../../assets/cat3.png";
import r5 from "../../assets/cat4.png";
import r6 from "../../assets/cat5.png";
import r7 from "../../assets/cat6.png";
import notfound from "../../assets/notfound.png";
import Categorycard from "../../components/categoryCard/Categorycard";

import Gallerycard from "../../components/gallery_card/Gallerycard";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useUser } from "../../hooks/useUser";
import { useSalon } from "../../hooks/useSalon";
import { useSalonData } from "../../hooks/useSalonData";
import { useNavigate } from "react-router";

const Dashboard = ({ userFromContext }) => {
    const { salon } = useSalon(userFromContext.uid);
    const [userFromDB, setUserFromDB] = useState(null);
    const [monthToDisplay, setMonthToDisplay] = useState("");
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const { getUser } = useUser(userFromContext.uid);
    // const _getUser = useCallback(() => getUserFromDB(), [getUserFromDB]);
    // const _navigate = useCallback(() => navigate(), [navigate]);

    // console.log(_getUser)
    // console.log(_navigate)

    useEffect(() => {
        

        if (userFromDB) {
			console.log(userFromDB);
            console.log("User Already Fetched");
        } else {
            const fetchUser = async () => {
                const user = await getUser();
                setUserFromDB(user);
                console.log("Inside fetch User");
            };

            const userTypeCheck = () => {
                console.log("Inside User Type Check");
                if (userFromDB) {
                    if (userFromDB.type === "Customer") {
                        navigate("/");
                    } else if (userFromDB.type === "SalonOwner") {
                        console.log("SalonOwner");
                    }
                }
            };
            if (userFromContext) {
                fetchUser();
                userTypeCheck();
            }
        }
    }, [getUser, navigate, userFromDB, userFromContext]);

    const [gallery, setgallery] = useState(false);
    const [specialist, setspecialist] = useState(false);
    const [categorys, setcategorys] = useState(false);

    const { monthlyEarnings, monthlyCustomers, monthlyBookings } = useSalonData(
        monthToDisplay ? monthToDisplay : "2022-05",
        salon ? salon : null
    );

    const Arr3 = [
        { id: 1, name: "anand" },
        { id: 2, name: "anand" },
        { id: 3, name: "anand" },
        { id: 4, name: "anand" },
        { id: 5, name: "anand" },
        { id: 6, name: "anand" },
    ];

    const Category = [
        { id: 1, name: "anand" },
        { id: 2, name: "anand" },
        { id: 3, name: "anand" },
        { id: 4, name: "anand" },
        { id: 5, name: "anand" },
        { id: 6, name: "anand" },
    ];

    const Gallery = [
        { id: 1, title: "Hair Cut", img: r2 },
        { id: 2, title: "Kids Haircut", img: r3 },
        { id: 3, title: "Hair Color", img: r4 },
        { id: 4, title: "Bridal", img: r5 },
        { id: 5, title: "Facial", img: r6 },
        { id: 6, title: "Spa", img: r7 },
    ];
    const team = [
        { id: 1, title: "Hair Cut", data: "hair specialist", img: e1 },
        { id: 2, title: "Kids Haircut", data: "hair specialist", img: e2 },
        { id: 3, title: "Hair Color", data: "hair specialist", img: e3 },
        { id: 4, title: "Bridal", data: "hair specialist", img: e1 },
        { id: 5, title: "Facial", data: "hair specialist", img: e2 },
        { id: 6, title: "Spa", data: "hair specialist", img: e2 },
    ];

    const getFullMonth = (monthToDisplay) => {
        const month = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        const d = new Date(monthToDisplay);
        return month[d.getMonth()];
    };
    const getMonth = (monthToDisplay) => {
        var date = new Date(monthToDisplay);
        return date.getMonth() + 1;
    };
    const getYear = (monthToDisplay) => {
        var date = new Date(monthToDisplay);
        return date.getFullYear();
    };

    return (
        <>
            <input
                type="month"
                value={monthToDisplay}
                onChange={(e) => {
                    setShow(true);
                    return setMonthToDisplay(e.target.value);
                }}
            />

            {show && (
                <div className="table-responsive chartBox">
                    {salon && (
                        <Chart
                            salon={salon}
                            monthToDisplay={getMonth(monthToDisplay)}
                            yearToDisplay={getYear(monthToDisplay)}
                        />
                    )}
                </div>
            )}

            <div className="conatiner journey">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 boxCon">
                        <div className="box">
                            <img src={j1} alt="" />
                            <p>{monthlyEarnings}</p>
                            <section>
                                {" "}
                                {getFullMonth(monthToDisplay)} Earnings
                            </section>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 boxCon">
                        <div className="box">
                            <img src={j2} alt="" />
                            <p>{monthlyCustomers}</p>
                            <section>Total Customer</section>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 boxCon">
                        <div className="box">
                            <img src={j3} alt="" />
                            <p>{monthlyBookings}</p>
                            <section>Appointment Booked</section>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="bookSection">
                <div className="bookings">
                    {Arr3.map((value, index) => {
                        return <Bookingcard key={value.id} name={value.name} />;
                    })}
                </div>
            </div> */}

            {/* <div className="gallery">
                <div className="categoryHead">
                    <span>Category</span>
                    <button className="btn">Add Category/Services</button>
                </div>

                <div className="categoryConatiner">
                    {Category.map((value, index) => {
                        return (
                            <Categorycard
                                key={value.id}
                                title={value.name}
                                img={r3}
                                fun={setcategorys}
                                notuse={categorys}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="gallery ">
                <h2>Our Gallery</h2>
                <div className="categoryConatiner">
                    {Gallery.map((value, index) => {
                        return (
                            <Gallerycard
                                key={value.id}
                                title={value.title}
                                img={value.img}
                                fun={setgallery}
                                notuse={gallery}
                            />
                        );
                    })}
                </div>
            </div> */}

            {/* {specialist ? (
                <Editspecialist img={notfound} fun={setspecialist} />
            ) : null}

            <h2 className="h2">Our Specialist</h2>

            <div className="categoryHead">
                <span>Specialist</span>
                <button className="btn" onClick={() => setspecialist(true)}>
                    Add New Specialist
                </button>
            </div>

            <div className="team dashTeam">
                {team.map((value, index) => {
                    return (
                        <Specialistcard
                            key={value.id}
                            name={value.name}
                            img={value.img}
                            data={value.data}
                        />
                    );
                })}
            </div> */}


            <Footer />
        </>
    );
};

export default Dashboard;
