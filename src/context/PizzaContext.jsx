import pizzaData from "../data/pizzas.json";
import { useEffect, useState, createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [allPizzas, setAllPizzas] = useState(pizzaData);

  const [cart, setCart] = useState([]);

  const addNotification = () => toast.success("Has agregado una pizza!");
  const removeNotification = () => toast.warn("Has quitado una pizza!");

  const getPizzaData = () => {
    setAllPizzas(pizzaData);
  };

  const addToCart = (id, img, name, price) => {
    const currentItems = cart.slice();
    const itemFound = currentItems.find((item) => item.id === id);
    if (itemFound) {
      const updatedCart = currentItems.map((e) => {
        if (e.id === id) {
          return { ...e, quantity: e.quantity + 1 };
        } else {
          return e;
        }
      });
      setCart(updatedCart);
      addNotification();
    } else {
      const newItem = { id, img, name, quantity: 1, price };
      const updatedCart = [...currentItems, newItem];
      setCart(updatedCart);
      addNotification();
    }
  };

  const removeItem = (id) => {
    const currentItems = cart.slice();
    const itemFound = currentItems.find((item) => item.id === id);
    if (itemFound) {
      const updatedCart = currentItems.filter((e) => {
        if (e.id === id && e.quantity > 1) {
          e.quantity = e.quantity - 1;
          return true;
        } else if (e.id === id && e.quantity === 1) {
          return false;
        } else {
          return e;
        }
      });
      setCart(updatedCart);
      removeNotification();
    }
  };

  useEffect(() => {
    getPizzaData();
  }, []);

  return (
    <PizzaContext.Provider
      value={{
        allPizzas,
        cart,
        setCart,
        addToCart,
        removeItem,
        ToastContainer,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
