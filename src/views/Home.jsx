import PizzaGallery from "../components/PizzaGallery";

const Home = () => {
  return (
    <>
      <section className="homeContainer animate__animated animate__fadeIn">
        <div className="headerImage">
          <h1>¡Pizzería Mamma Mía!</h1>
          <h6>Tenemos las mejores pizzas que podrás encontrar</h6>
        </div>
        <div className="galleryContainer">
          <PizzaGallery />
        </div>
      </section>
    </>
  );
};
export default Home;
