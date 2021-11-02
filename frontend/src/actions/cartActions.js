import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

// with "getState."... can access productList, productDetails, cart from reducer
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    // Things to display in our cart:
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty
    }
  })
  // can only save strings in local storage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}