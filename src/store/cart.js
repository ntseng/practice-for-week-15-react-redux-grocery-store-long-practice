const ADD_TO_CART = "cart/ADD_TO_CART";
const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART";

export default function cartReducer(state = {}, action) {
	switch (action.type) {
		case ADD_TO_CART:
			let cartCopy = { ...state.cart };
			cartCopy[action.id] = { id: action.id, count: 1 };
			return cartCopy;
		case REMOVE_FROM_CART:
			let removeState = { ...state.cart };
			delete removeState[action.id];
			return removeState;
		default:
			return state;
	}
}

export function addToCart(id) {
	return {
		type: ADD_TO_CART,
		id
	}
}

export function removeFromCart(id) {
	return {
		type: REMOVE_FROM_CART,
		id
	}
}
