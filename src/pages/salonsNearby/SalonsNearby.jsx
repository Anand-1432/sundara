import React, { useState, useEffect } from "react";
import "./SalonsNearby.scss";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import r5 from "../../assets/r5.png";
import star from "../../assets/star.png";
import girl from "../../assets/girl.jpg";
import locationIcon from "../../assets/locationIcon.png";
import { SalonCard } from "./SalonCard";
import { useAllSalons } from "../../hooks/useAllSalons";

export default function SalonsNearby() {
    const { salons } = useAllSalons();
    const [salonsArray, setSalonsArray] = useState([]);

    const [salonTypeMen, setSalonTypeMen] = useState(false);
    const [salonTypeWomen, setSalonTypeWomen] = useState(false);
    const [salonTypeUnisex, setSalonTypeUnisex] = useState(false);
    const [salonCity, setSalonCity] = useState("");
    const [salonService, setSalonService] = useState("");

    const handleTypeCheckboxChange = (e) => {
        switch (e.target.value) {
            case "Men":
                setSalonTypeMen(e.target.checked);
                break;
            case "Women":
                setSalonTypeWomen(e.target.checked);
                break;
            case "Unisex":
                setSalonTypeUnisex(e.target.checked);
                break;
            default:
                break;
        }
    };

    // useEffect(() => {
    //     // if (salons && salonsArray.length === 0) {
    //     //     setSalonsArray((prev) => salons.filter((salon) => salon.owner));
    //     // }

    //     // console.log(salonTypeMen, salonTypeWomen, salonTypeUnisex);
    //     // console.log(salons);
    //     // console.log("Array");
    //     // console.log(salonsArray);
    // }, [salonTypeMen, salonTypeWomen, salonTypeUnisex, salons, salonsArray]);

    return (
        <>
            <div className="nearby-page-wrapper">
                <div className="filters-sidebar">
                    <div className="filter-head">
                        <p className="login-title">Filters</p>
                        <div className="login-hr hr-filter" />
                    </div>
                    <div className="filter-body">
                        <div className="type-wrapper">
                            <h6>Salon Type</h6>
                            <div className="type-input-wrapper">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        value="Men"
                                        onChange={handleTypeCheckboxChange}
                                        type="checkbox"
                                        // value="Men"
                                        id="flexCheckDefault"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                    >
                                        Men
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        value="Men"
                                        onChange={handleTypeCheckboxChange}
                                        type="checkbox"
                                        // value="Women"
                                        id="flexCheckDefault"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                    >
                                        Women
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        value="Men"
                                        onChange={handleTypeCheckboxChange}
                                        type="checkbox"
                                        // value="Unisex"
                                        id="flexCheckDefault"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                    >
                                        Unisex
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="city-input-wrapper">
                            <div className="form-group login-sj">
							<label htmlFor="exampleInputBuisnessName">
                                    City
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputBuisnessName"
                                    placeholder="Your desired city"
                                    required
                                    value={salonCity}
                                    onChange={(e) =>
                                        setSalonCity(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="service-input-wrapper">
                            <div className="form-group login-sj">
							<label htmlFor="exampleInputBuisnessName">
                                    Service Category
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputBuisnessName"
                                    placeholder="Service Category"
                                    required
                                    value={salonService}
                                    onChange={(e) =>
                                        setSalonService(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="salon-nearby-page-wrapper">
                    {salonsArray.length > 0 ? <>
						{salonsArray.map((salon, index) => (
                            <>
                                <SalonCard key={index} salon={salon} />
                            </>
                        ))}
					</> : salons && <>
					{salons.map((salon, index) => (
                            <>
                                <SalonCard key={index} salon={salon} />
                            </>
                        ))}
					</>}
                        
                </div>
            </div>
        </>
    );
}
