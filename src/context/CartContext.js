import { createContext, useEffect, useReducer } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const CartContext = createContext();

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_SERVICE_TO_CART":
			return {...state, cart: [...action.payload.cart], bookedByUID: action.payload.bookedByUID, bookedSalonId: action.payload.bookedSalonId }
		case "DELETE_SERVICE_FROM_CART":
			return {...state, cart: [...action.payload.cart], bookedByUID: action.payload.bookedByUID, bookedSalonId: action.payload.bookedSalonId }
		default:
			return {...state}
	}
}

export function CartContextProvider({ children }) {

	const [state, dispatch] = useReducer(cartReducer, {cart:[], bookedByUID:"", bookedSalonId:""})

	useEffect(() => {
		console.log(state.cart)
	}, [state.cart])
	

	const addAllServicesToCart = (servicesArray,bookedByUID, bookedSalonId) => {
		// console.log(servicesArray)
		servicesArray.map(service => addServiceToCart(service.serviceId, service.price.discounted,bookedByUID, bookedSalonId)
		)
	}

	const addServiceToCart = (serviceId, servicePrice, bookedByUID, bookedSalonId) => {
		// console.log(serviceId)
		let cartArray = state.cart
		cartArray.push({serviceId, servicePrice})
		// console.log(cartArray)

		dispatch({type: "ADD_SERVICE_TO_CART", payload: {cart: [...cartArray], bookedByUID, bookedSalonId}})
	}

	const deleteServiceFromCart = (serviceId, bookedByUID, bookedSalonId) => {
		let cartArray = state.cart.filter((service) => service.serviceId !== serviceId)
		dispatch({type: "DELETE_SERVICE_FROM_CART", payload: {cart: [...cartArray], bookedByUID, bookedSalonId}})

	}

    return (
        <CartContext.Provider value={{...state, addServiceToCart, deleteServiceFromCart, addAllServicesToCart }}>
            {children}
        </CartContext.Provider>
    );
}
