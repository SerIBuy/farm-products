import React from "react";
import { products } from "../../mocks/mocks";

export const ProductContext = React.createContext(products);
export const ProductProvider = ProductContext.Provider;
