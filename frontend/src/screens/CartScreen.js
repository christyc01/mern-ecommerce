import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';


// location: for quantity (through query string)
// history: for redirect
const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  // get the quantity from e.g., "?qty=1":
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  console.log(qty)

  return ( 
    <div>
      Cart
    </div>
   );
}
 
export default CartScreen;