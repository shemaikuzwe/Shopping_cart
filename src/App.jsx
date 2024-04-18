import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
