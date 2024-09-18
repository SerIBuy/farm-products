import { StyledProductsList } from "./styled";
import Product from "../product/Product";
import { ProductContext } from "../product-context";
import { useContext } from "react";

export default function ProductsList() {
  const products = useContext(ProductContext);
  return (
    <StyledProductsList>
      {products &&
        products.length &&
        products.map((product, index) => (
          <Product product={product} key={index} />
        ))}
    </StyledProductsList>
  );
}
