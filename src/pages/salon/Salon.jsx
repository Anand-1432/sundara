import React from "react";
import { useNavigate, useParams } from "react-router";
import { useSingleDoc } from "../../hooks/useSingleDoc";

export default function Salon() {
    const { salonId } = useParams();
    let navigate = useNavigate();
    const { document: salon } = useSingleDoc("salons", salonId);
    return (
        <div>
            <p>Salon</p>
            {salon && (
                <>
                    <p>{salon.name}</p>
                    <p>{salonId}</p>
					<button onClick={() => navigate(`bookSlot`)}>Book Appointment</button>
					<button onClick={() => navigate(`addDetails`)}>Add Details</button>
                </>
            )}
        </div>
    );
}
