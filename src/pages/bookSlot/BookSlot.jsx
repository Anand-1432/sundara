import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useBookSlot } from "../../hooks/useBookSlot";

import { Modal, Button } from "react-bootstrap";

import arrowPrev from "../../assets/arrow-prev.png";
import arrowNext from "../../assets/arrow-next.png";

import Slider from "react-slick";
import "./BookSlot.scss";
export default function BookSlot() {
    const location = useLocation();
    const navigate = useNavigate();

    const [datesArray, setDatesArray] = useState([]);
    const [servicesArray, setServicesArray] = useState(
        location.state.services ? location.state.services : []
    );
	const [specialistsArray, setSpecialistsArray] = useState(
        location.state.specialists ? location.state.specialists : []
    );

    const { salonId } = useParams();
    const { user } = useAuthContext();
    const { bookSlot } = useBookSlot();

    const [selectedDate, setSelectedDate] = useState(null);

    const [slotDate, setSlotDate] = useState("");
    const [slotMonth, setSlotMonth] = useState("");
    const [slotYear, setSlotYear] = useState("");
    const [slotTime, setSlotTime] = useState("");
    const [slotPrice, setSlotPrice] = useState("");

    let currentRunningDate = new Date();
    const [currentDate, setCurrentDate] = useState({
        date: currentRunningDate.getDate(),
        month: currentRunningDate.getMonth(),
        year: currentRunningDate.getFullYear(),
    });

    const [modalShow, setModalShow] = useState(true);

    useEffect(() => {
        if (!location.state.services) {
            return navigate(-1);
        } else {
            console.log(location.state.services);
            const totalAmount = location.state.services.reduce(function (
                acc,
                service
            ) {
                acc = acc + parseInt(service.price.discounted);
                return acc;
            },
            0);

            console.log(totalAmount);
            setSlotPrice(totalAmount);
        }
    }, [location.state, navigate]);

    const getDateInfo = (date, month, year) => {
        let dayLong = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        let dayShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let today = new Date(year, month, date);

        let isDisabled = false;
        if (
            date < currentDate.date &&
            month <= currentDate.month &&
            year <= currentDate.year
        ) {
            isDisabled = true;
        }

        let dayInfo = {
            date: {
                month: today.getMonth() + 1,
                date: today.getDate(),
                year: today.getFullYear(),
            },
            day: {
                full: dayLong[today.getDay()],
                short: dayShort[today.getDay()],
                index: today.getDay(),
            },
            isDisabled: isDisabled,
        };
        return dayInfo;
    };

    function getDaysInMonth(month, year) {
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            days.push(
                getDateInfo(date.getDate(), date.getMonth(), date.getFullYear())
            );
            date.setDate(date.getDate() + 1);
        }
        // console.log(days);
        setDatesArray(days);
    }

    useEffect(() => {
        if (datesArray.length === 0) {
            // console.log("Here");
            let today = new Date();
            // console.log(today.getMonth());
            getDaysInMonth(today.getMonth(), today.getFullYear());
        }
        // let today = new Date("2022","05","1");
        // console.log(today.getMonth())

        // console.log(selectedDate);
    }, [datesArray, selectedDate]);

    useEffect(() => {
        console.log(location.state);
    }, [location.state]);

    const handleMonthSelect = (e) => {
        setSlotMonth(e.target.value);
        let changedMonth = parseInt(e.target.value.substr(5, 2)) - 1;
        let changedYear = e.target.value.substr(0, 4);
        let dateObject = new Date(changedYear, changedMonth);
        getDaysInMonth(dateObject.getMonth(), dateObject.getFullYear());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let date = new Date(slotDate);
        let slot = {
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
            timeHrs: slotTime.substr(0, 2),
            timeMins: slotTime.substr(3, 2),
        };
        console.log("Submitted");
        console.log(slot);
        if (servicesArray && slotDate && slotTime) {
            console.log("Booked");
            bookSlot({
                slot,
                salonId,
                bookedBy: user.uid,
                price: slotPrice,
                statusCode: 0,
                services: servicesArray,
                specialists: specialistsArray,
            });
        } else {
            throw new Error("No Services/Time/Date");
        }
    };

    const afterSlideChange = (index) => {
        if (!datesArray[index].isDisabled) {
            setSelectedDate(datesArray[index]);
            setSlotDate(
                `${datesArray[index].date.year}-${datesArray[index].date.month}-${datesArray[index].date.date}`
            );
        } else {
            setSelectedDate(null);
        }
    };

    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "10px",
        slidesToShow: 7,
        draggable: true,
        speed: 300,
        afterChange: afterSlideChange,
        focusOnSelect: true,
    };

    const slider = useRef(null);

    const ConfirmationModal = (props) => {
        const handleClose = () => setModalShow(false);
        const handleContinue = () => {
            setModalShow(false);
        };
        return (
            <>
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Confirmation Box
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Do you want continue further and checkout</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            className="modal-button"
                            variant="secondary"
                            onClick={handleClose}
                        >
                            Close
                        </Button>
                        <Button
                            type="submit"
                            style={{ backgroundColor: "limegreen" }}
                            className="modal-button"
                            variant="primary"
                            onClick={handleContinue}
                        >
                            Continue
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    };

    return (
        <>
            <div className="bookslot-page-wrapper">
                <div className="wrapper">
                    <div className="top-wrapper">
                        <h6 className="page-head">Schedule Your Appointment</h6>
                        <div className="month-input-wrapper">
                            <input
                                type="month"
                                value={slotMonth}
                                onChange={handleMonthSelect}
                            />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <>
                            <div className="dates-slider-wrapper">
                                <Slider {...settings}>
                                    {datesArray &&
                                        datesArray.map((date, index) => (
                                            <>
                                                <div
                                                    className={`date-solo-slide ${
                                                        date.isDisabled
                                                            ? "disabled"
                                                            : null
                                                    }`}
                                                >
                                                    <div className="date-day-wrapper">
                                                        <h4 className="date-date">
                                                            {date.date.date}
                                                        </h4>
                                                        <p className="date-day">
                                                            {date.day.full}
                                                        </p>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                </Slider>
                            </div>
                            <p className="warning">
                                *This date is not available
                            </p>
                        </>
                        <>
                            <div className="schedule-mid-wrapper">
                                <div className="total-amount-wrapper">
                                    <h6 className="slot-price">
                                        Total Amount To be Payed in Ruppees :
                                    </h6>
                                    <p className="amount">{slotPrice}</p>
                                </div>
                                <div className="form-group grp-sj time-input-bookslot">
                                    <label htmlFor="exampleInputTime">
                                        Time : {` `}
                                    </label>
                                    <input
                                        type="time"
                                        className="form-control inputSJ"
                                        id="exampleInputDate"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Time"
                                        value={slotTime}
                                        onChange={(e) =>
                                            setSlotTime(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </>

                        <div className="select-specialists"></div>

                        <div className="button-wrapper-book">
                            <button
                                className="button-booking"
                                // onClick={() => setModalShow(true)}
                            >
                                Book Slot
                            </button>
                        </div>
                        {/* <ConfirmationModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        /> */}
                    </form>
                </div>
            </div>
        </>
    );
}
