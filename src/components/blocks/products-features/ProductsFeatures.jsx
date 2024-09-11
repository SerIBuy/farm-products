import FeatureItem from "../../ui/feature/FeatureItem";
import Title from "../../ui/titles/Title";
import Button from "../../ui/button/Button";
import {
  StyledProductsFeatures,
  ProductsfeaturesList,
  ProductsFeaturesItem,
} from "./styled";

export default function ProductsFeatures({ products }) {
  return (
    <StyledProductsFeatures>
      <Title hstyle="medium">Почему фермерские продукты лучше?</Title>
      <ProductsfeaturesList>
        {products.map((product) => (
          <ProductsFeaturesItem type={product.type} key={product.id}>
            <FeatureItem {...product} />
          </ProductsFeaturesItem>
        ))}
      </ProductsfeaturesList>
      <Button>Купить</Button>
    </StyledProductsFeatures>
  );
}
