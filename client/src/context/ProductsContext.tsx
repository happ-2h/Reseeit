import { createContext, useState } from "react";

import { Product } from "../types";

export const ProductsContext = createContext([]);

export const ProductsContextProvider = props => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {props.children}
    </ProductsContext.Provider>
  )
};
