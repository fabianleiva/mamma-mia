import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { Route, Routes, Navigate } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer";
import Cart from "./views/Cart";
import PizzaDetail from "./components/PizzaDetail";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route name="home" path="/home" element={<Home />}></Route>
          <Route path="/pizza/:pizzaId" element={<PizzaDetail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
