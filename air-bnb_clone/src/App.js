import Card from "./components/Card";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";

import image from "./Images/Card.jpeg";

import data from "./data.json";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        // status={item.status}
        // image={image}
        // rating={item.rating}
        // numberReviews={item.numberReviews}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
        image={image}
        item={item}
      />
    );
  });

  return (
    <div>
      <Navigation />
      <Hero />
      <div className="u-flex card-container">{cards}</div>

      <p className="footer">Curated wit ❤️ by Piyush Sultaniya</p>
    </div>
  );
}
