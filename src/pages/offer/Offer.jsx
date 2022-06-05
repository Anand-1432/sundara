import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import "./offer.scss";

import Offercard from "../../components/offer_card/Offercard";
import Editoffer from "../../components/editoffer/Editoffer";

import notfound from "../../assets/notfound.png";

const Offer = () => {
    const [offer, setoffer] = useState(false);

    const Off = [
        {
            id: 1,
            title: "Hair color off 20%",
            img: "https://picsum.photos/seed/picsum/500/300",
            data: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 2,
            title: "Hair color off 20%",
            img: "https://picsum.photos/seed/picsum/500/300",
            data: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 3,
            title: "Hair color off 20%",
            img: "https://picsum.photos/seed/picsum/500/300",
            data: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 4,
            title: "Hair color off 20%",
            img: "https://picsum.photos/seed/picsum/500/300",
            data: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
    ];

    return (
        <>
            {offer ? <Editoffer img={notfound} fun={setoffer} /> : null}

            <div className="offer">
                <div className="blogCon">Best Offers</div>

                <div className="serbtn">
                    <button
                        className="btn btn-primary serbtn"
                        onClick={() => {
                            setoffer(true);
                        }}
                    >
                        Add New Offer
                    </button>
                </div>
            </div>

            <div className="offCon">
                {Off.map((value, index) => {
                    return (
                        <Offercard
                            key={value.id}
                            img={value.img}
                            title={value.title}
                            data={value.data}
                        />
                    );
                })}
            </div>

            <Footer />
        </>
    );
};

export default Offer;
