import { useEffect, useState } from 'react';

const initialState = {
	cart: [],
};

export function useInitialState() {
	const [state, setState] = useState(initialState);

	const addToCart = (payload) => {
		setState((prevState) => {
			return { ...prevState, cart: [...prevState.cart, payload] };
		});
	};

	const removeFromCart = (payload) => {
		setState((prevState) => {
			return {
				...prevState,
				cart: prevState.cart.filter((item) => item.id !== payload.id),
			};
		});
	};

	const cartLength = state.cart.length;

	return { state, addToCart, cartLength, removeFromCart };
}
