import ProductCard from "../components/ProductCard";

const ThemeChooser = () => {
  return (
    <div className="home-container">
      <ProductCard
        product_id={0}
        category="Electronics"
        condition="New"
        date="10-10-2010"
        name="Sample Product"
        price={10345}
      />
    </div>
  );
}

export default ThemeChooser;
