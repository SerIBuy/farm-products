import ProductCard from "../../ui/product-card/ProductCard";
import Title from "../../ui/titles/Title";
import Button from "../../ui/button/Button";
import { StyledProducts, ProductsList, ProductsItem } from "./styled";

export default function Products({ products }) {
  return (
    <StyledProducts>
      <Title hstyle="medium">Почему фермерские продукты лучше?</Title>
      <ProductsList>
        {products.map((product) => (
          <ProductsItem type={product.type} key={product.id}>
            <ProductCard {...product} />
          </ProductsItem>
        ))}
      </ProductsList>
      <Button>Купить</Button>
    </StyledProducts>
  );
}
