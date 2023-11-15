
import { Routes,BrowserRouter,Route } from "react-router-dom";
import Layout from "./components/Layout";
import Container from "./container/Container";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Layout/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
