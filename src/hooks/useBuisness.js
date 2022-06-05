import { useFirestore } from "./useFirestore";


export default function useBuisness(buisness){

	const {addDocument} = useFirestore("salons");

	const addSalon = (buisness) => {
		addDocument({...buisness});
	}

	return {addSalon}
  
}
