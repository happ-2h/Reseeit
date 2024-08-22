import ProductCard from "../components/ProductCard";

const ThemeChooser = () => {
  return (
    <div className="home-container">
      <ProductCard
        product_id={0}
        category="Electronics"
        condition="New"
        date="10-10-2010"
        name="Default Theme"
        price={10345}
        theme="default-theme"
      />

      <ProductCard
        product_id={0}
        category="Electronics"
        condition="New"
        date="10-10-2010"
        name="Default Theme"
        price={10345}
        theme="catppucin-mocha"
      />
    </div>
  );
}

export default ThemeChooser;
