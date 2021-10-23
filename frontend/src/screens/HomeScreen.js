import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from "axios"

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // could do "const res = ..." and access it via res.data, instead:
      const { data } = await axios.get('/api/products');
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return ( 
    <Row>
      {products.map((product) => {
        return (
          <Col 
            key={product._id}
            sm={12} md={6} lg={4} xl={3}
          >
            <Product product={product} />
          </Col>
        )
      })
      }
    </Row>
   );
}
 
export default HomeScreen;