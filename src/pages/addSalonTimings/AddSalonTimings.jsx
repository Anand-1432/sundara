import "./AddSalonTimings.scss";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useFirestore } from "../../hooks/useFirestore";
import { useSalon } from "../../hooks/useSalon";

import { useAuthContext } from "../../hooks/useAuthContext";
import { DaySoloCheckBox } from "./DaySoloCheckBox";
import { SoloDayTimings } from "./SoloDayTimings";

export default function AddSalonTimings() {
    const { user } = useAuthContext();
    const { salon } = useSalon(user.uid);
    const { updateDocument } = useFirestore("salons");

    const navigate = useNavigate();
	const [slotIntervalState, setSlotIntervalState] = useState("")
    const [monTimings, setMonTimings] = useState({
        isOpen: false,
        openTime: {
            hrs: "",
            mins: "",
        },
        closeTime: {
            hrs: "",
            mins: "",
        },
    });
    const [tueTimings, setTueTimings] = useState({
        isOpen: false,
        openTime: {
            hrs: "",
            mins: "",
        },
        closeTime: {
            hrs: "",
            mins: "",
        },
    });
    const [wedTimings, setWedTimings] = useState({
        isOpen: false,
        openTime: {
            hrs: "",
            mins: "",
        },
        closeTime: {
            hrs: "",
            mins: "",
        },
    });
    const [thurTimings, setThurTimings] = useState({
        isOpen: false,
        openTime: {
            hrs: "",
            mins: "",
        },
        closeTime: {
            hrs: "",
            mins: "",
        },
    });
    const [friTimings, setFriTimings] = useState({
        isOpen: false,
        openTime: {
            hrs: "",
            mins: "",
        },
        closeTime: {
            hrs: "",
            mins: "",
        },
    });

    const [satTimings, setSatTimings] = useState({
        isOpen: false,
        openTime: {
            hrs: "",
            mins: "",
        },
        closeTime: {
            hrs: "",
            mins: "",
        },
    });
    const [sunTimings, setSunTimings] = useState({
        isOpen: false,
        openTime: {
            hrs: "",
            mins: "",
        },
        closeTime: {
            hrs: "",
            mins: "",
        },
    });

    const [timinigsArray, setTimingsArray] = useState([
        sunTimings,
        monTimings,
        tueTimings,
        wedTimings,
        thurTimings,
        friTimings,
        satTimings,
    ]);

    const daysArray = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    const handleCheckBoxChange = (e) => {
        let newArr = [...timinigsArray];
        switch (e.target.value) {
            case "Sun":
                newArr[0].isOpen = e.target.checked;
                break;
            case "Mon":
                newArr[1].isOpen = e.target.checked;
                break;
            case "Tue":
                newArr[2].isOpen = e.target.checked;
                break;
            case "Wed":
                newArr[3].isOpen = e.target.checked;
                break;
            case "Thur":
                newArr[4].isOpen = e.target.checked;
                break;
            case "Fri":
                newArr[5].isOpen = e.target.checked;
                break;
            case "Sat":
                newArr[6].isOpen = e.target.checked;
                break;
            default:
                break;
        }
        setTimingsArray(newArr);
    };

    const handleDayTimeUpdate = (inputTime, type, day, index) => {
        let newArr = [...timinigsArray];
        if (type === "Open") {
            newArr[index].openTime = {
                hrs: inputTime.substr(0, 2),
                mins: inputTime.substr(3, 2),
            };
        } else if (type === "Close") {
            newArr[index].closeTime = {
                hrs: inputTime.substr(0, 2),
                mins: inputTime.substr(3, 2),
            };
        }
        setTimingsArray(newArr);
    };

	const handleSubmit = (e) => {
        e.preventDefault();

        updateDocument(
            {
                timinigsArray: [...timinigsArray],
				slotInterval: slotIntervalState
            },
            salon.id
        );

        return navigate("/addSalonServices");
    };

    // useEffect(() => {
    //     console.log("NewCopy");
    //     console.log(timinigsArray);
    // }, [timinigsArray]);

    return (
        <>
            <div className="form-wrapper">
                <>
                    <div id="login-form">
                        <p className="login-title">Add Salon Timings</p>
                        <div className="login-hr" />
                        <form onSubmit={handleSubmit}>
                            <div className="timings-container">
                                {daysArray.map((day, index) => (
                                    <>
                                        <DaySoloCheckBox
                                            key={index}
                                            day={day}
                                            handleCheckBoxChange={
                                                handleCheckBoxChange
                                            }
                                        />
                                    </>
                                ))}
                            </div>

                            <div className="open-close-container">
                                {daysArray.map((day, index) => (
                                    <>
                                        {timinigsArray[index].isOpen && (
                                            <>
                                                <SoloDayTimings
                                                    day={day}
                                                    key={index}
                                                    index={index}
                                                    handleDayTimeUpdate={
                                                        handleDayTimeUpdate
                                                    }
                                                />
                                            </>
                                        )}
                                    </>
                                ))}
                            </div>

							<div className="form-group login-sj">
                                <label htmlFor="exampleInputBuisnessName">
                                    Slot Interval in minutes
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputBuisnessName"
                                    placeholder="30"
                                    required
                                    value={slotIntervalState}
                                    onChange={(e) =>
                                        setSlotIntervalState(e.target.value)
                                    }
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-auth-sj btn btn-primary"
                            >
                                Submit Salon Timings
                            </button>
                        </form>
                    </div>
                </>
            </div>
        </>
    );
}
