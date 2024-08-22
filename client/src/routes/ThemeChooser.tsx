import ProductCard from "../components/ProductCard";

const ThemeChooser = () => {
  return (
    <>
      <h3 style={{
        width:  "100%",
        height: "3rem",
        display:        "flex",
        justifyContent: "center",
        alignItems:     "center",
        fontSize: "1.5rem",
        color: "#777"
      }}>Click to set a theme</h3>
      <div className="home-container">
        <ProductCard
          product_id={-1}
          category="Electronics"
          condition="New"
          date="10-10-2010"
          name="Default Theme"
          price={10345}
          isPreview={true}
          theme="default-theme"
        />

        <ProductCard
          product_id={-1}
          category="Food Item"
          condition="Old"
          date="10-10-2010"
          name="Catppuccin Mocha"
          price={352678}
          isPreview={true}
          theme="catppuccin-mocha"
        />

        <ProductCard
          product_id={-1}
          category="Clothing"
          condition="New"
          date="09-08-2007"
          name="Ayu Dark"
          price={18203}
          isPreview={true}
          theme="ayu-dark"
        />
      </div>
    </>
  );
}

export default ThemeChooser;
