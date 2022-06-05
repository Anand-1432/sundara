import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Bookingcard from "../../components/booking_card/Bookingcard";
import Footer from "../../components/footer/Footer";
import ServiceCardBooking from "../../components/serviceCardBooking/ServiceCardBooking";
import { useCartContext } from "../../hooks/useCartContext";
import { useSalonForCustomer } from "../../hooks/useSalonForCustomer";
import { useUser } from "../../hooks/useUser";
import BookSlot from "../bookSlot/BookSlot";
import "./booking.scss";

const Booking = ({ userId }) => {
    const { user } = useUser(userId);
    const { salonId } = useParams();
    const navigate = useNavigate();

    const {
        cart,
        addAllServicesToCart,
        deleteServiceFromCart,
        addServiceToCart,
    } = useCartContext();

    const { salon } = useSalonForCustomer(salonId);

    const [servicesSelected, setServicesSelected] = useState([]);

    if (salon) {
        console.log(salon.services);
    }

    const addServiceById = (serviceId) => {
        if (salon && salon.services) {
            if (
                !servicesSelected.find(
                    (service) => service.serviceId === serviceId
                )
            ) {
                console.log("Here");
                let serviceFromArray = salon.services.find(
                    (service) => service.serviceId === serviceId
                );
                setServicesSelected((prev) => [
                    ...prev,
                    { ...serviceFromArray },
                ]);
            }
        }
    };

    const deleteServiceById = (serviceId) => {
        if (
            servicesSelected &&
            servicesSelected.find((service) => service.serviceId === serviceId)
        ) {
            let servicesSelectedArray = servicesSelected.filter(
                (service) => service.serviceId !== serviceId
            );
            setServicesSelected(servicesSelectedArray);
        }
    };

    const handleBookingServices = () => {
        console.log(servicesSelected);
        // addAllServicesToCart(servicesSelected, userId, salon.id);
    };

    // useEffect(() => {
    //     console.log(cart);
    // }, [cart]);

    console.log(servicesSelected);
    return (
        <>
            <div className="bookingCon">
                <p className="login-title">Add Services to your cart</p>
                <div className="login-hr" />
                <p className="subheading">
                    Services Selected (Your Selected Services will appear here)
                </p>
                <div className="login-hr small-one-hr" />
                <div className="services-catalouge services-deck-wrapper services-selected">
                    {servicesSelected &&
                        servicesSelected.map((service, index) => (
                            <>
                                <ServiceCardBooking
                                    service={service}
                                    key={service.serviceId}
                                    bottom={false}
                                    addServiceById={addServiceById}
                                    deleteServiceById={deleteServiceById}
                                />
                            </>
                        ))}
                </div>
                <p className="subheading">Services Available</p>
                <div className="login-hr small-one-hr" />
                <div className="services-catalouge services-deck-wrapper">
                    {salon &&
                        salon.services.map((service, index) => (
                            <>
                                <ServiceCardBooking
                                    service={service}
                                    key={service.serviceId}
                                    bottom={true}
                                    addServiceById={addServiceById}
                                    deleteServiceById={deleteServiceById}
                                />
                            </>
                        ))}
                </div>

                <div className="button-wrapper-book">
                    <button
                        className="button-booking"
                        onClick={() =>
                            navigate(`/salon/${salonId}/booking/specialists`, {
                                state: {
                                    services: servicesSelected,
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

export default Booking;
