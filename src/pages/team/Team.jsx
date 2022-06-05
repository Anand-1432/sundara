import React from "react";
import Footer from "../../components/footer/Footer";
import "./team.scss";

import e1 from "../../assets/e1.jpg";
import e2 from "../../assets/e2.png";
import e3 from "../../assets/e3.jpg";

const Team = () => {
    return (
        <>
            <div className="teamCon">Our Team Member</div>

            <div className="serbtn">
                <button className="btn btn-primary serbtn">Add New Team</button>
            </div>

            <h2 className="h2">Our Expert Team</h2>
            <div className="team">
                <div className=" content">
                    <img id="img" src={e1} alt="" />
                    <h5>Emma Watson</h5>
                    <p id="p1">haircut & massage specialist</p>
                </div>

                <div className="content">
                    <img id="img" src={e2} alt="" />
                    <h5>James Franco</h5>
                    <p id="p1"> dicta, earum odit</p>
                </div>

                <div id="img" className="content">
                    <img id="img" src={e3} alt="" />
                    <h5>San Watson</h5>
                    <p id="p1"> dicta, earum</p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Team;
