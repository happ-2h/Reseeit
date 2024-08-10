/*
  TODO: Empty list view
 */
import ProductCard from "../components/ProductCard";

import "../assets/styles/Home.css";

const Home = () => {
  return (
    <div id="home-container">
      {/* TEMP */}
      <ProductCard name="Test1" category="Electronics" condition="Used" price={14660} date="2022-05-28" />
      <ProductCard name="Longer product name" category="Food" condition="New" price={17892} date="2012-05-28" />
      <ProductCard name="Test1" category="Electronics" condition="Used" price={1466} date="2022-05-28" />
      <ProductCard name="Test1" category="Electronics" condition="Used" price={1466} date="2022-05-28" />
      <ProductCard name="Test1" category="Electronics" condition="Used" price={1466} date="2022-05-28" />
      <ProductCard name="Test1" category="Electronics" condition="Used" price={1466} date="2022-05-28" />
      <ProductCard name="Test1" category="Electronics" condition="Used" price={1466} date="2022-05-28" />
    </div>
  )
};

export default Home;
