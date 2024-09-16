import FeatureItem from "../../ui/feature/FeatureItem";
import Title from "../../ui/titles/Title";
import Button from "../../ui/button/Button";
import {
  StyledProductsFeatures,
  ProductsfeaturesList,
  ProductsFeaturesItem,
} from "./styled";

export default function ProductsFeatures({ features }) {
  return (
    <StyledProductsFeatures>
      <Title hstyle="medium">Почему фермерские продукты лучше?</Title>
      <ProductsfeaturesList>
        {features.map((feature) => (
          <ProductsFeaturesItem type={feature.type} key={feature.id}>
            <FeatureItem {...feature} />
          </ProductsFeaturesItem>
        ))}
      </ProductsfeaturesList>
      <Button>Купить</Button>
    </StyledProductsFeatures>
  );
}
