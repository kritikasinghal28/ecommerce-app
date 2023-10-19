import "./App.css";
import { Products } from "./components/Products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
