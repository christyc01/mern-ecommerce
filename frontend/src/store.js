import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer
});

// Create the variable
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
// initialState - can get cart items, token, user, etc. from here
// Add the variable to initial state
const initialState = {
  cart: { cartItems: cartItemsFromStorage}
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools (applyMiddleware(...middleware)));

export default store;