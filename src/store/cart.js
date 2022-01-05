const ADD_TO_CART = "cart/ADD_TO_CART";
const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART";
const INCREMENT_CART = "cart/INCREMENT_CART";
const DECREMENT_CART = 'cart/DECREMENT_CART';
const SET_CART = "cart/SET_CART"
export default function cartReducer(state = {}, action) {
  let stateCopy = { ...state };
  switch (action.type) {
    case ADD_TO_CART:
      stateCopy.cart = { id: action.id, count: 1 };
      return stateCopy;
    case REMOVE_FROM_CART:
      delete stateCopy.cart[action.id];
      return stateCopy;
    case INCREMENT_CART:
      stateCopy.cart[action.id] = { count: state[action.id].count++, ...state[action.id] };
      return stateCopy;
    case DECREMENT_CART:
      stateCopy.cart[action.id] = { count: state[action.id].count--, ...state[action.id] };
      return stateCopy;
    case SET_CART:
      console.log('action id ----------', action.id)
      stateCopy.cart = { count: action.count }
      return stateCopy;
    default:
      return state;
  }
}

export function setCart(count, id) {
  return {
    type: SET_CART,
    id,
    count
  }
}

export function decrementCart(id) {
  return {
    type: DECREMENT_CART,
    id,
  };
}

export function incrementCart(id) {
  return {
    type: INCREMENT_CART,
    id,
  };
}

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    id,
  };
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
}
