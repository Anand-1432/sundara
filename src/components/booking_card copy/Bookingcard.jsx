import React, { useState } from "react";
import "./bookingcard.scss";
import im from "../../assets/b1.png";

import MoreVertIcon from "@material-ui/icons/MoreVert";

const Bookingcard = (props) => {
    const {
        description,
        addService,
        serviceIndex,
        disabled: isDisabled,
    } = props;
    const handleClick = () => {
        setDisbaled(true);
        addService(serviceIndex);
    };

    const [disabled, setDisbaled] = useState(false);
    return (
        <>
            <div className="card cardSJ" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">
                        {props.name} - {serviceIndex}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.price}</h6>
                    <p className="card-text">{description}</p>
                    {disabled ? (
                        <>
                            <button
                                className="btn btn-primary"
                                disabled
                                onClick={handleClick}
                            >
                                Add this service
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className="btn btn-primary"
                                onClick={handleClick}
                            >
                                Add this service
                            </button>
                        </>
                    )}
                </div>
            </div>
            {/* <div className="cardBody">
                <img src={im} alt="" />
                <p className="title">
                    {props.name} <br />
                    {serviceIndex}
                </p>
                <section>
                    $ {props.price} <MoreVertIcon />
                </section>

                {disabled ? (
                    <>
                        <button
                            className="btn btn-primary serviceButton"
                            disabled
                            onClick={handleClick}
                        >
                            Add this service
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className="btn btn-primary serviceButton"
                            onClick={handleClick}
                        >
                            Add this service
                        </button>
                    </>
                )}
                <p className="desc">{description}</p> */}

            {/* <div className='ser'>Service:</div>
             <div>
                 <button className='btn btn-light'>Hair color</button>
                 <button className='btn btn-light'>Body Massage</button>
                 <button className='btn btn-light'>Shaving</button>
                 <button className='btn btn-light'>Hair Cut</button>
             </div> */}

            {/* <div className='tim'>Time <span>Afternoon 3:00 pm</span></div> */}
            {/* </div> */}
        </>
    );
};

export default Bookingcard;
