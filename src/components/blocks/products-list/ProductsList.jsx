import { StyledProductsList } from "./styled";
import Product from "../product/Product";
import { useContext } from "react";
import { ProductContext } from "../product-context";

export default function ProductsList() {
  const products = useContext(ProductContext);
  return (
    <StyledProductsList>
      {products && products.length > 1 ? (
        products.map((element, index) => (
          <Product product={element} key={index} />
        ))
      ) : (
        <span>Продукты были слишком вкусные и их разобрали.</span>
      )}
    </StyledProductsList>
  );
}
