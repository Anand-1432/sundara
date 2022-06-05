import { useFirestore } from "./useFirestore";

export const useBookSlot = () => {
    const { addDocument } = useFirestore("bookings");

    const bookSlot = (object) => {
        addDocument({ ...object });
    };

    return { bookSlot };
};
