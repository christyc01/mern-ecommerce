import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch(action.type){
    case CART_ADD_ITEM:
      const item = action.payload;
      // Find if item exists:
      // For each of the items in the cartItems, find where x.product (= ID) equals item.product, meaning it exists
      const existItem = state.cartItems.find(x => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
        }
      } else {
        return {
          ...state,
          // current items plus new item
          cartItems: [...state.cartItems, item]
        }
      }
    default:
      return state;
  }
}