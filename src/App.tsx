import { Routes, BrowserRouter, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Layout from "./components/Layout";
import Container from "./container/Container";
import Auth from "./components/Auth";
import Support from "./components/Support";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
