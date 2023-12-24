import { useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import { CardText, ListGroup, ListGroupItem } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PizzaDetail = () => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const { allPizzas, addToCart, ToastContainer } = useContext(PizzaContext);

  const { pizzaId } = useParams();

  const selectedPizza = allPizzas.find((element) => element.id == pizzaId);

  return (
    <main className="detailContainer animate__animated animate__fadeIn">
      {selectedPizza ? (
        <div>
          <Card className="detailCard">
            <div className="selectedCardImageContainer">
              <Card.Img
                className="selectedCardImage"
                variant="top"
                src={selectedPizza.img}
              />
            </div>
            <div className="selectedCardBodyContainer">
              <Card.Body className="selectedCardBody">
                <Card.Title>
                  {capitalizeFirstLetter(selectedPizza.name)}
                </Card.Title>
                <CardText className="selectedCardText">
                  {selectedPizza.desc}
                </CardText>
                <ListGroup>
                  <ListGroupItem className="ingredients">
                    <h6>Ingredientes:</h6>
                  </ListGroupItem>
                  {selectedPizza.ingredients.map((i, index) => {
                    return (
                      <ListGroupItem className="ingredients" key={index}>
                        🍕{capitalizeFirstLetter(i)}
                      </ListGroupItem>
                    );
                  })}
                </ListGroup>
                <div className="priceAndButton">
                  <CardText className="price">
                    Precio: ${selectedPizza.price}
                  </CardText>
                  <Button
                    className="btn"
                    variant="outline-danger"
                    onClick={() =>
                      addToCart(
                        selectedPizza.id,
                        selectedPizza.img,
                        selectedPizza.name,
                        selectedPizza.price
                      )
                    }
                  >
                    Añadir🛒
                  </Button>
                </div>
              </Card.Body>
            </div>
            <ToastContainer />
          </Card>
        </div>
      ) : (
        <Navigate to="/*" />
      )}
    </main>
  );
};

export default PizzaDetail;
