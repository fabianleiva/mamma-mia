import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const PizzaGallery = () => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const { allPizzas, addToCart, ToastContainer } = useContext(PizzaContext);

  const navigate = useNavigate();

  const goToPizza = (pizzaId) => {
    navigate(`/pizza/${pizzaId}`);
  };

  return (
    <main className="cardContainer animate__animated animate__fadeIn">
      <ToastContainer />
      {allPizzas.map((pizza) => {
        return (
          <Card key={pizza.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body>
              <Card.Title>{capitalizeFirstLetter(pizza.name)}</Card.Title>
            </Card.Body>
            <h6>Ingredientes:</h6>
            <ListGroup className="list-group-flush">
              {pizza.ingredients.map((e, index) => {
                return (
                  <ListGroup.Item className="ingredients" key={index}>
                    🍕{capitalizeFirstLetter(e)}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
            <Card.Body className="cardLinkButtons">
              <Button
                className="btn"
                variant="outline-primary"
                onClick={() => goToPizza(pizza.id)}
              >
                Ver más👀
              </Button>
              <Button
                className="btn"
                variant="outline-danger"
                onClick={() =>
                  addToCart(pizza.id, pizza.img, pizza.name, pizza.price)
                }
              >
                Añadir🛒
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </main>
  );
};

export default PizzaGallery;
