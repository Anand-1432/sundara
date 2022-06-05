import "./AddSalonServices.scss";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ServiceCard from "../../components/serviceCard/ServiceCard";
import Footer from "../../components/footer/Footer";

import { useFirestore } from "../../hooks/useFirestore";
import { useSalon } from "../../hooks/useSalon";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useCloudinary } from "../../hooks/useCloudinary";
import { useAlphaNumericId } from "../../hooks/useAlphaNumericId";

export default function AddSalonServices() {
    const navigate = useNavigate();

    const { user } = useAuthContext();
    const { salon } = useSalon(user.uid);
    const { updateDocument } = useFirestore("salons");
    const { uploadImage } = useCloudinary();
    const { generateID } = useAlphaNumericId();
	if(salon){
		console.log(salon)
	}

    const [services, setServices] = useState(salon && salon.services ? salon.services : []);
    const [serviceName, setServiceName] = useState("");
    const [servicePhoto, setServicePhoto] = useState("");
    const [serviceOriginalPrice, setServiceOriginalPrice] = useState("");
    const [serviceDiscountedPrice, setServiceDiscountedPrice] = useState("");
    const [serviceDescription, setServiceDescription] = useState("");

    const [edit, setedit] = useState(false);

    let tempCardData = {
        name: "Faux Hawk",
        description:
            "It is a long established fact that a re3ader will be distracted by thee readable cotnent of a page when looking",
        price: {
            actual: "$150",
            original: "$250",
        },
		serviceId: "U9ioDIpsBXUJF4TDcjoi",
        image: {
            url: "https://res.cloudinary.com/bizupreach/image/upload/v1653482934/sundara/men1_rfvr8s.png",
            publicId: "men1_rfvr8s",
        },
    };

    const deleteServiceAtIndex = (indexToDelete) => {
        setServices(
            services.filter((service, index) => index !== indexToDelete)
        );
    };

    const editServiceAtIndex = (indexToEdit, newServiceObject) => {
        let servicesArrayCopy = [...services];

        let oldServiceObject = servicesArrayCopy[indexToEdit];
        servicesArrayCopy[indexToEdit] = {
            ...oldServiceObject,
            ...newServiceObject,
        };

        setServices(servicesArrayCopy);
    };

    useEffect(() => {
        if(services.length === 0){
			console.log(services)
			if(salon && salon.services){
				console.log(salon)
				let servicesArrayCopy = [...salon.services]
				console.log(servicesArrayCopy)
				setServices(servicesArrayCopy)
			}
		}
    }, [salon, services]);

    const handleServiceSubmit = async (e) => {
        e.preventDefault();

        const imageObject = await uploadImage(servicePhoto);
        console.log(imageObject);

        setServices((prev) => [
            ...prev,
            {
                image: {
                    ...imageObject,
                },
                name: serviceName,
				serviceId: generateID(20),
                price: {
                    discounted: serviceDiscountedPrice,
                    original: serviceOriginalPrice,
                },
                description: serviceDescription,
            },
        ]);

        e.target.reset();
    };

    const handleAllServiceSubmit = (e) => {
        updateDocument(
            {
                services,
            },
            salon.id
        );

        return navigate("/addSalonSpecialists");
    };

    return (
        <>
            <div className="header-wrapper">
                <div className="salonCon">Your Salon Services</div>
                <div className="new-service-form">
                    <p className="login-title">Add New Service</p>
                    <div className="login-hr" />
                    <form onSubmit={handleServiceSubmit}>
                        <div className="form-group login-sj">
                            <label htmlFor="exampleInputBuisnessName">
                                Upload Service Photo
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                id="exampleInputBuisnessName"
                                placeholder="Your Service Photo"
                                onChange={(e) =>
                                    setServicePhoto(e.target.files[0])
                                }
                            />
                        </div>

                        <div className="form-group login-sj">
                            <label htmlFor="exampleInputBuisnessName">
                                Service Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputBuisnessName"
                                placeholder="Hair Cut: Faux Hawk"
                                required
                                value={serviceName}
                                onChange={(e) => setServiceName(e.target.value)}
                            />
                        </div>
                        <div className="form-group login-sj">
                            <label htmlFor="exampleInputBuisnessName">
                                Service Price
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputBuisnessName"
                                placeholder="240"
                                value={serviceOriginalPrice}
                                onChange={(e) =>
                                    setServiceOriginalPrice(e.target.value)
                                }
                            />
                        </div>
                        <div className="form-group login-sj">
                            <label htmlFor="exampleInputBuisnessName">
                                Service Discounted Price
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputBuisnessName"
                                placeholder="150"
                                value={serviceDiscountedPrice}
                                onChange={(e) =>
                                    setServiceDiscountedPrice(e.target.value)
                                }
                            />
                        </div>
                        <div className="form-group login-sj">
                            <label htmlFor="exampleInputBuisnessName">
                                Service Description
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputBuisnessName"
                                placeholder="Describe your service"
                                required
                                value={serviceDescription}
                                onChange={(e) =>
                                    setServiceDescription(e.target.value)
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn-auth-sj btn btn-primary"
                        >
                            Add This Service
                        </button>
                    </form>
                </div>
            </div>

            <div className="services-wrapper">
                {services &&
                    services.map((service, index) => (
                        <>
                            <ServiceCard
                                key={index}
                                index={index}
                                service={service}
                                deleteServiceAtIndex={deleteServiceAtIndex}
                                editServiceAtIndex={editServiceAtIndex}
                            />
                        </>
                    ))}
            </div>

            <div className="all-done-wrapper">
                <button
                    onClick={handleAllServiceSubmit}
                    type="submit"
                    className="btn-services-all-done btn btn-success"
                >
                    <span>Submit these Services</span>
                </button>
            </div>

            <Footer />
        </>
    );
}
