import React, { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { useSalon } from "../../hooks/useSalon";

export default function AddDetails({ userId }) {
    const { salon } = useSalon(userId);
    const { updateDocument } = useFirestore("salons");

    const [services, setServices] = useState([]);
    const [specialists, setSpecialists] = useState([]);
    const [serviceName, setServiceName] = useState("");
    const [servicePrice, setServicePrice] = useState("");
    const [serviceDiscount, setServiceDiscount] = useState("");
    const [serviceDescription, setServiceDescription] = useState("");

    const [specialistName, setSpecialistName] = useState("");
    const [specialistWorkArea, setSpecialistWorkArea] = useState("");
    const [specialistDescription, setSpecialistDescription] = useState("");

    const handleServiceSubmit = (e) => {
        e.preventDefault();

        setServices((prev) => [
            ...prev,
            {
                name: serviceName,
                price: servicePrice,
                discount: serviceDiscount,
                description: serviceDescription,
            },
        ]);

        e.target.reset();
    };
    const handleSpecialistSubmit = (e) => {
        e.preventDefault();

        setSpecialists((prev) => [
            ...prev,
            {
                name: specialistName,
                workArea: specialistWorkArea,
                available: 1,
                description: specialistDescription,
            },
        ]);
        e.target.reset();
    };

    const handleSubmit = () => {
        console.log(services, specialists);
        updateDocument(
            {
                services,
                specialists,
            },
            salon.id
        );
    };

    return (
        <>
            <h3>Services</h3>
            <form id="services" onSubmit={handleServiceSubmit}>
                <label>
                    <span>Title</span>
                    <input
                        type="text"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                    />
                </label>
                <label>
                    <span>Price</span>
                    <input
                        type="text"
                        value={servicePrice}
                        onChange={(e) => setServicePrice(e.target.value)}
                    />
                </label>
                <label>
                    <span>Discount</span>
                    <input
                        type="text"
                        value={serviceDiscount}
                        onChange={(e) => setServiceDiscount(e.target.value)}
                    />
                </label>
                <label>
                    <span>Description</span>
                    <input
                        type="text"
                        value={serviceDescription}
                        onChange={(e) => setServiceDescription(e.target.value)}
                    />
                </label>
                <button>Add This Service</button>
            </form>
            <div className="services">
                {services &&
                    services.map((service) => (
                        <>
                            <h5>Service</h5>
                            <p>Name: {service.name}</p>
                            <p>Price: {service.price}</p>
                            <p>Description: {service.description}</p>
                            <p>Discount: {service.discount}</p>
                        </>
                    ))}
            </div>
            <h3>Specialists</h3>
            <form id="specialists" onSubmit={handleSpecialistSubmit}>
                <label>
                    <span>Name</span>
                    <input
                        type="text"
                        value={specialistName}
                        onChange={(e) => setSpecialistName(e.target.value)}
                    />
                </label>
                <label>
                    <span>WorkArea</span>
                    <input
                        type="text"
                        value={specialistWorkArea}
                        onChange={(e) => setSpecialistWorkArea(e.target.value)}
                    />
                </label>
                <label>
                    <span>Description</span>
                    <input
                        type="text"
                        value={specialistDescription}
                        onChange={(e) =>
                            setSpecialistDescription(e.target.value)
                        }
                    />
                </label>
                <button>Add This specialist</button>
            </form>
            <div className="specialists">
                {specialists &&
                    specialists.map((specialist) => (
                        <>
                            <h5>Specialist</h5>
                            <p>Name: {specialist.name}</p>
                            <p>WorkArea: {specialist.workArea}</p>
                            <p>Description: {specialist.description}</p>
                            <p>Avaliability: {specialist.available}</p>
                        </>
                    ))}
            </div>
            <button onClick={handleSubmit}>Submit This Information</button>
        </>
    );
}
