import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const Header = () => {
  const { cart } = useContext(PizzaContext);

  const totalValue = cart.reduce((accumulator, currentElement) => {
    return accumulator + currentElement.quantity * currentElement.price;
  }, 0);

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
  return (
    <>
      <header className="animate__animated animate__fadeInDown bg-danger">
        <nav className="navigationBar">
          <div className="nameSection">
            <NavLink className={setActiveClass} to="/">
              <h3 className="webName">🍕Pizzería Mamma Mía!</h3>
            </NavLink>
          </div>
          <div className="linkSection">
            <NavLink className={setActiveClass} to="/cart">
              🛒: ${totalValue}
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
