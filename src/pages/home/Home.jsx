import React from "react";
import Carousel from "../../components/carousel/Carousel";
import "./home.scss";
import p1 from "../../assets/p1.jpg";
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.jpg";
import b3 from "../../assets/b3.jpg";
import e1 from "../../assets/e1.jpg";
import e2 from "../../assets/e2.png";
import e3 from "../../assets/e3.jpg";
import r2 from "../../assets/r2.png";
import r3 from "../../assets/r3.png";
import r4 from "../../assets/r4.png";
import r5 from "../../assets/r5.png";
import r6 from "../../assets/r6.png";
import r7 from "../../assets/r7.png";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import calendar from "../../assets/calendar.png";
import icon from "../../assets/Icon.jpg";
import icon1 from "../../assets/Icon1.jpg";
import shaver from "../../assets/shaver.png";
import p2 from "../../assets/image.jpg";
import Slider from "../../components/slider/Slider";

import r1 from "../../assets/r1.png";
import Footer from "../../components/footer/Footer";
import { useCartContext } from "../../hooks/useCartContext";


const Home = () => {

    return (
        <>
            <Carousel img1={r1} img2={r1} img3={r1} />

            <div className="container mainCon">
                <div className="row features">
                    <div className="col-xl-6 col-lg-6">
                        <h2>Our Best Features</h2>
                        <p>
                            Sundara looks has organized all the salons, beauty
                            parlors and spas in your city, with the best deals.
                            For us, there is nothing more important than the
                            health of you and your loved ones. If you are
                            looking for great beauty and wellness services, you
                            have found the right place. Book your appointment
                            now.
                        </p>

                        <div className="container-fluid part">
                            <div className="row">
                                <div className="col-md-6 col-lg-6 col-xl-6">
                                    <img src={calendar} alt="" />
                                    Easy way to Appointment
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-6">
                                    <img src={shaver} alt="" />
                                    Best Team
                                </div>
                            </div>
                        </div>

                        <div className="container-fluid part">
                            <div className="row">
                                <div
                                    className="col-md-6 col-lg-6 col-xl-6"
                                    id="p1"
                                >
                                    <img src={icon1} alt="" />
                                    Good discount
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-6">
                                    <img src={icon} alt="" />
                                    Happy Customer
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 imgsection">
                        <img src={p1} alt="" />
                    </div>
                </div>
            </div>

            <div className="container-fluid about">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 imgsection1">
                        <img src={p2} alt="" />
                    </div>
                    <div className="col-xl-6 col-lg-6 aboutdata">
                        <h4 id="head1">About us</h4>
                        <h2>Welcome To Shop</h2>
                        <p>
                            We will help you find the best beauty salons in your
                            neighbourhood and enable you to book instantly.
                            Search and book your favorite salon and beauty
                            parlor with the most trusted salons and beauty
                            parlors directory in India. Get full body care on
                            the go, no hassles.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Home;
