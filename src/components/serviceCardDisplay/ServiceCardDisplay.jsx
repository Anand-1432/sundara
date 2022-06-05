import React, { useState } from "react";

import "./ServiceCardDisplay.scss";



const ServiceCardDisplay = ({service}) => {

    return (
        <>
            <div className="card service-card service-card-display">
                <div className="img-wrapper">
                    <img className="card-img-top" src={service.image.url} alt="..." />
                </div>

                <div className="card-body">
                    <div className="body-top">
                        <h5 className="card-title">{`${service.name}`}</h5>
                        <div className="price-side">
                            <div className="actual-price">{service.price.discounted}</div>
                            <div className="original-price">{service.price.original}</div>
                        </div>
                    </div>

                    <div className="text-mid">
                        <p className="card-text">
                            {service.description}
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ServiceCardDisplay;
