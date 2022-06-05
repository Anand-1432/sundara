import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import Bookingcard from "../../components/booking_card/Bookingcard";
import Footer from "../../components/footer/Footer";
import SpecialistCardBooking from "../../components/specialistCardBooking/SpecialistCardBooking";
import { useCartContext } from "../../hooks/useCartContext";
import { useSalonForCustomer } from "../../hooks/useSalonForCustomer";
import { useUser } from "../../hooks/useUser";
import BookSlot from "../bookSlot/BookSlot";

const BookingSpecialists = ({ userId }) => {
    const { user } = useUser(userId);
    const { salonId } = useParams();
    const navigate = useNavigate();
	const location = useLocation()


    const { salon } = useSalonForCustomer(salonId);

    const [servicesSelected, setServicesSelected] = useState(location.state.services ? location.state.services : []);
    const [specialistsSelected, setSpecialistsSelected] = useState([]);

    if (salon) {
        console.log(salon.specialists);
    }

	useEffect(() => {
		console.log(location.state.services)
	},location.state.services)

    const addSpecialistById = (specialistId) => {
        if (salon && salon.specialists) {
            if (
                !specialistsSelected.find(
                    (specialist) => specialist.specialistId === specialistId
                )
            ) {
                console.log("Here");
                let specialistFromArray = salon.specialists.find(
                    (specialist) => specialist.specialistId === specialistId
                );
                setSpecialistsSelected((prev) => [
                    ...prev,
                    { ...specialistFromArray },
                ]);
            }
        }
    };

    const deleteSpecialistById = (specialistId) => {
        if (
            specialistsSelected &&
            specialistsSelected.find((specialist) => specialist.specialistId === specialistId)
        ) {
            let specialistsSelectedArray = specialistsSelected.filter(
                (specialist) => specialist.specialistId !== specialistId
            );
            setSpecialistsSelected(specialistsSelectedArray);
        }
    };

    console.log(specialistsSelected);
    return (
        <>
            <div className="bookingCon">
                <p className="login-title">Add Specialists to your cart</p>
                <div className="login-hr" />
                <p className="subheading">
                    Specialists Selected (Your Selected Specialists will appear here)
                </p>
                <div className="login-hr small-one-hr" />
                <div className="services-catalouge services-deck-wrapper services-selected">
                    {specialistsSelected &&
                        specialistsSelected.map((specialist, index) => (
                            <>
                                <SpecialistCardBooking
                                    specialist={specialist}
                                    key={specialist.specialistId}
                                    bottom={false}
                                    addSpecialistById={addSpecialistById}
                                    deleteSpecialistById={deleteSpecialistById}
                                />
                            </>
                        ))}
                </div>
                <p className="subheading">Specialists Available</p>
                <div className="login-hr small-one-hr" />
                <div className="services-catalouge services-deck-wrapper">
                    {salon &&
                        salon.specialists.map((specialist, index) => (
                            <>
                                <SpecialistCardBooking
                                    specialist={specialist}
                                    key={specialist.specialistId}
                                    bottom={true}
                                    addSpecialistById={addSpecialistById}
                                    deleteSpecialistById={deleteSpecialistById}
                                />
                            </>
                        ))}
                </div>

                <div className="button-wrapper-book">
                    <button
                        className="button-booking"
                        onClick={() =>
                            navigate(`/salon/${salonId}/booking/bookSlot`, {
                                state: {
                                    services: servicesSelected,
									specialists :specialistsSelected,
                                },
                            })
                        }
                    >
                        Book Slot
                    </button>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    );
};

export default BookingSpecialists;
