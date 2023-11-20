import { Routes, BrowserRouter, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Container from "./container/Container";
import Auth from "./components/Auth";
import Support from "./components/Support";
import Home from "./components/home/Home";
import { useEffect } from "react";
import { useCartStore } from "./store/useCart";

function App() {
  const { activeTheme } = useCartStore();

  useEffect(() => {
    if (activeTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [activeTheme]);

  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
