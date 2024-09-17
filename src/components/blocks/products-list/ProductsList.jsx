import { StyledProductsList } from "./styled";
import Product from "../product/Product";

export default function ProductsList({ products }) {
  return (
    <StyledProductsList>
      {products &&
        products.length &&
        products.map((product) => <Product product={product} />)}
    </StyledProductsList>
  );
}
