import React, { useState } from "react";
import Editservices from "../editservices/Editservices";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import "./ServiceCard.scss";



const ServiceCard = ({index,service, img, deleteServiceAtIndex, editServiceAtIndex }) => {
    const [edt, setedt] = useState(false);

	const handleDelete = () => {
		deleteServiceAtIndex(index)
	}

    return (
        <>
            <div className="card service-card">
                <div className="img-wrapper">
                    <img className="card-img-top" src={service.image.url} alt="..." />
                </div>

                <div className="card-body">
                    <div className="body-top">
                        <h5 className="card-title">{`${service.name}`}</h5>
                        <div className="price-side">
                            <div className="actual-price">${service.price.discounted}</div>
                            <div className="original-price">${service.price.original}</div>
                        </div>
                    </div>

                    <div className="text-mid">
                        <p className="card-text">
                            {service.description}
                        </p>
                    </div>

                    <div className="card-buttons">
                        <div
                            className="button-sj-card edit-button"
                            onClick={() => {
								
                                setedt(true);
                            }}
                        >
                            <EditIcon className="icon" />
                            <span className="button-text">Edit</span> 
                        </div>
                        <div onClick={handleDelete} className="button-sj-card delete-button">
                            <DeleteIcon className="icon" /><span className="button-text">Delete</span>
                        </div>
                    </div>

                    {edt ? <Editservices service={service} editServiceAtIndex={editServiceAtIndex} index={index} fun={setedt} img={img} /> : null}
                </div>
            </div>
        </>
    );
};

export default ServiceCard;
