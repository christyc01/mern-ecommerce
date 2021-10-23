import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container className="py-3">
          <h1>E-commerce Site?</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
