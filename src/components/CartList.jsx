import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

const CartList = () => {
  const { cart, addToCart, removeItem, ToastContainer } =
    useContext(PizzaContext);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const valueById = (id) => {
    const item = cart.find((e) => e.id === id);
    if (item) {
      return item.quantity * item.price;
    }
    return 0;
  };

  const totalValue = cart.reduce((accumulator, currentElement) => {
    return accumulator + currentElement.quantity * currentElement.price;
  }, 0);

  const getQuantityById = (id) => {
    const item = cart.find((e) => e.id === id);
    if (item) {
      return item.quantity;
    }
    return 0;
  };

  return (
    <>
      <ToastContainer />
      {cart.length >= 1 ? (
        <div className="cartDetail">
          <h6 className="cartTitle">Detalles del pedido:</h6>
          <ListGroup>
            {cart.map((item) => {
              return (
                <ListGroup.Item key={item.id} className="cartItem">
                  <div className="cartSection1">
                    <img
                      className="pizzaCartImage"
                      src={item.img}
                      alt="pizzaCartImage"
                    />
                    <h6 className="pizzaNameCart">
                      {capitalizeFirstLetter(item.name)}
                    </h6>
                  </div>
                  <div className="cartSection2">
                    <p>${valueById(item.id)}</p>
                    <Button
                      variant="outline-danger"
                      onClick={() =>
                        removeItem(item.id, item.img, item.name, item.price)
                      }
                    >
                      -
                    </Button>
                    <p>Cant: {getQuantityById(item.id)}</p>
                    <Button
                      variant="outline-primary"
                      onClick={() =>
                        addToCart(item.id, item.img, item.name, item.price)
                      }
                    >
                      +
                    </Button>
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          <h6 className="totalCartValue">Total: ${totalValue}</h6>
          <Button
            onClick={() =>
              Swal.fire({
                title: "Compra existosa!",
                icon: "success",
                confirmButtonText: "Cool",
              })
            }
            variant="success"
          >
            Ir a Pagar
          </Button>
        </div>
      ) : (
        <h4>Tu carrito esta vacío 😭!</h4>
      )}
    </>
  );
};
export default CartList;
