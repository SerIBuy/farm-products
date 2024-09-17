import { StyledProduct, ProductImage } from "./styled";
import Title from "../../ui/titles/Title";
import ProductTabs from "../product-tabs/ProductTabs";

export default function Product({ product }) {
  return (
    <StyledProduct>
      <ProductImage
        src={product.image}
        width="248"
        height="248"
        alt={product.title}
      />
      <Title hstyle="title">{product.title}</Title>
      <ProductTabs product={product}></ProductTabs>
    </StyledProduct>
  );
}
