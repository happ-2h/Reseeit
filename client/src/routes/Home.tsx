/*
  TODO: Empty list view
 */
import { useContext, useEffect } from "react";
import { ProductsContext }       from "../context/ProductsContext";
import ProductCard               from "../components/ProductCard";

import {Product} from '../types';

import "../assets/styles/Home.css";
import "../assets/styles/themes.css";

const Home = () => {
  const { products, setProducts, theme } = useContext(ProductsContext);

  useEffect(() => {
    (async() => {
      try {
        fetch('http://localhost:3006/api/v1/products')
          .then(val  => val.json())
          .then(data => setProducts(data.data.products))
          .catch(err => console.error(err));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="home-container">
      {
        products &&
        products.map((product: Product) => {
          return (
            <ProductCard key={ product.id }
              product_id={ product.id }
              category={ product.category }
              condition={ product.condition }
              date={ product.date_purchased.split('T')[0] }
              name={ product.name }
              price={ product.price_purchased }
              theme={theme}
            />
          );
        })
      }
    </div>
  )
};

export default Home;
