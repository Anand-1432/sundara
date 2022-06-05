import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

import "./ServiceCardBooking.scss";
import { Add } from "@material-ui/icons";

const ServiceCardBooking = ({
    index,
    service,
    deleteServiceById,
    addServiceById,
    bottom,
}) => {
    const handleDelete = () => {
        deleteServiceById(service.serviceId);
    };

    const handleAdd = () => {
        addServiceById(service.serviceId);
    };

    return (
        <>
            <div className="card service-card service-card-booking">
                <div className="img-wrapper">
                    <img
                        className="card-img-top"
                        src={service.image.url}
                        alt="..."
                    />
                </div>

                <div className="card-body">
                    <div className="body-top">
                        <h5 className="card-title">{`${service.name}`}</h5>
                        <div className="price-side">
                            <div className="actual-price">
                                ${service.price.discounted}
                            </div>
                            <div className="original-price">
                                ${service.price.original}
                            </div>
                        </div>
                    </div>

                    <div className="text-mid">
                        <p className="card-text">{service.description}</p>
                    </div>

                    <div className="card-buttons">
                        {bottom ? (
                            <>
                                <div
                                    className="button-sj-card edit-button booking-btn"
                                    onClick={handleAdd}
                                >
                                    <Add className="icon" />
                                    <span className="button-text">Add</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div
                                    onClick={handleDelete}
                                    className="button-sj-card delete-button booking-btn"
                                >
                                    <DeleteIcon className="icon" />
                                    <span className="button-text">Delete</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceCardBooking;
