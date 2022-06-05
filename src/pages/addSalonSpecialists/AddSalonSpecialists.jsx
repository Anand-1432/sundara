import "./AddSalonSpecialists.scss";

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useFirestore } from "../../hooks/useFirestore";
import { useSalon } from "../../hooks/useSalon";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCloudinary } from "../../hooks/useCloudinary";
import { useAlphaNumericId } from "../../hooks/useAlphaNumericId";

import SpecialistCard from "../../components/specialistCard/SpecialistCard";
import Footer from "../../components/footer/Footer";
import AddIcon from "@material-ui/icons/Add";

export default function AddSalonSpecialists() {
    const location = useLocation();
    const navigate = useNavigate();

    const { user } = useAuthContext();
    const { salon } = useSalon(user.uid);
    const { updateDocument } = useFirestore("salons");
    const { uploadImage } = useCloudinary();
    const { generateID } = useAlphaNumericId();

    const [specialists, setSpecialists] = useState(
        salon && salon.specialists ? salon.specialists : []
    );
    const [specialistName, setSpecialistName] = useState("");
    const [specialistPhoto, setSpecialistPhoto] = useState("");
    const [specialistServices, setSpecialistServices] = useState([]);
    const [specialistServiceTemp, setSpecialistServiceTemp] = useState("");
    const [specialistGender, setSpecialistGender] = useState("");
    const [specialistDescription, setSpecialistDescription] = useState("");

    const [edit, setedit] = useState(false);

    let tempCardData = {
        name: "Jennifer Lawernace",
        description:
            "It is a long established fact that a re3ader will be distracted by thee readable cotnent of a page when looking",
        services: ["Massage", "HairCut", "Facial"],
        image: {
            url: "https://res.cloudinary.com/bizupreach/image/upload/v1653505842/neofg5dn9u1mrpbdryms.jpg",
            publicId: "neofg5dn9u1mrpbdryms",
        },
        gender: "Woman",
    };

    const deleteSpecialistAtIndex = (indexToDelete) => {
        setSpecialists(
            specialists.filter((specialist, index) => index !== indexToDelete)
        );
    };

    const editSpecialistAtIndex = (indexToEdit, newSpecialistObject) => {
        let specialistsArrayCopy = [...specialists];

        let oldSpecialistObject = specialistsArrayCopy[indexToEdit];
        specialistsArrayCopy[indexToEdit] = {
            ...oldSpecialistObject,
            ...newSpecialistObject,
        };

        setSpecialists(specialistsArrayCopy);
    };

    useEffect(() => {
        if (specialists.length === 0) {
            // console.log(specialists)
            if (salon && salon.specialists) {
                // console.log(salon);
                let specialistsArrayCopy = [...salon.specialists];
                // console.log(servicesArrayCopy)
                setSpecialists(specialistsArrayCopy);
            }
        }
    }, [salon, specialists]);

    const handleSpecialistSubmit = async (e) => {
        e.preventDefault();

        const imageObject = await uploadImage(specialistPhoto);
        console.log(imageObject);

        setSpecialists((prev) => [
            ...prev,
            {
                image: {
                    ...imageObject,
                },
                specialistId: generateID(20),
                name: specialistName,
                services: [...specialistServices],
                description: specialistDescription,
                gender: [specialistGender],
            },
        ]);

        e.target.reset();
    };

    const handleAllSpecialistsSubmit = (e) => {
        updateDocument(
            {
                specialists,
            },
            salon.id
        );

        return navigate("/addPaymentDetails");
    };

    return (
        <>
            <div className="header-wrapper">
                <div className="salonCon">Your Salon specialists</div>
                <div className="new-service-form">
                    <p className="login-title">Add New Specialist</p>
                    <div className="login-hr" />
                    <form onSubmit={handleSpecialistSubmit}>
                        <div className="form-group login-sj">
                            <label htmlFor="exampleInputBuisnessName">
                                Upload Profile Photo
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                id="exampleInputBuisnessName"
                                placeholder="Your Specialist Photo"
                                onChange={(e) =>
                                    setSpecialistPhoto(e.target.files[0])
                                }
                            />
                        </div>

                        <div className="form-group login-sj">
                            <label htmlFor="exampleInputBuisnessName">
                                Specialist Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputBuisnessName"
                                placeholder="Jennifer Lawerance"
                                required
                                value={specialistName}
                                onChange={(e) =>
                                    setSpecialistName(e.target.value)
                                }
                            />
                        </div>
                        <div className="form-group login-sj">
                            <label htmlFor="exampleInputBuisnessName">
                                Specialist Services
                            </label>
                            <div className="service-input-wrapper">
                                <input
                                    type="text"
                                    className="form-control service-solo-input"
                                    id="exampleInputBuisnessName"
                                    placeholder="Massage"
                                    value={specialistServiceTemp}
                                    onChange={(e) =>
                                        setSpecialistServiceTemp(e.target.value)
                                    }
                                />
                                <div
                                    onClick={() =>
                                        setSpecialistServices((prev) => [
                                            ...prev,
                                            specialistServiceTemp,
                                        ])
                                    }
                                    className="add-service"
                                >
                                    <AddIcon fontSize="large" />
                                </div>
                            </div>
                            {specialistServices && (
                                <>
                                    <ul className="services-ul">
                                        {specialistServices.map(
                                            (service, index) => (
                                                <li key={index} >{service}</li>
                                            )
                                        )}
                                    </ul>
                                </>
                            )}
                        </div>
                        <label>Specialist Services</label>
                        <div className="salon-gender-type">
                            <div className="form-check gender-solo">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                    value="Man"
                                    onClick={(e) =>
                                        setSpecialistGender(e.target.value)
                                    }
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexRadioDefault1"
                                >
                                    Man
                                </label>
                            </div>
                            <div className="form-check gender-solo">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    value="Women"
                                    onClick={(e) =>
                                        setSpecialistGender(e.target.value)
                                    }
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexRadioDefault2"
                                >
                                    Woman
                                </label>
                            </div>
                            <div className="form-check gender-solo">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    value="Other"
                                    onClick={(e) =>
                                        setSpecialistGender(e.target.value)
                                    }
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexRadioDefault2"
                                >
                                    Other
                                </label>
                            </div>
                        </div>

                        <div className="form-group login-sj">
                            <label htmlFor="exampleInputBuisnessName">
                                Specialist Description
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputBuisnessName"
                                placeholder="Your Specialisation"
                                required
                                value={specialistDescription}
                                onChange={(e) =>
                                    setSpecialistDescription(e.target.value)
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn-auth-sj btn btn-primary"
                        >
                            Add This Specialist
                        </button>
                    </form>
                </div>
            </div>

            <div className="services-wrapper">
                {specialists &&
                    specialists.map((specialist, index) => (
                        <>
                            <SpecialistCard
                                key={specialist.specialistId}
                                index={index}
                                specialist={specialist}
                                deleteSpecialistAtIndex={
                                    deleteSpecialistAtIndex
                                }
                                editSpecialistAtIndex={editSpecialistAtIndex}
                            />
                        </>
                    ))}
            </div>

            <div className="all-done-wrapper">
                <button
                    onClick={handleAllSpecialistsSubmit}
                    type="submit"
                    className="btn-services-all-done btn btn-success"
                >
                    <span>Submit these specialists</span>
                </button>
            </div>

            <Footer />
        </>
    );
}
