import { createContext, useState } from "react";

import { Product } from "../types";

export const ProductsContext = createContext([]);

export const ProductsContextProvider = props => {
  const [products, setProducts] = useState<Product[]>([]);
  const [theme, setTheme]       = useState("default-theme");

  return (
    <ProductsContext.Provider value={{ products, setProducts, theme, setTheme }}>
      {props.children}
    </ProductsContext.Provider>
  )
};
