import FeatureItem from "../../ui/feature/FeatureItem";
import Title from "../../ui/titles/Title";
import Button from "../../ui/button/Button";
import {
  StyledProductsFeatures,
  ProductsfeaturesList,
  ProductsFeaturesItem,
} from "./styled";
import { FeaturesContext } from "../features-context";
import { useContext } from "react";
import { AppRoute } from "../../../const";

export default function ProductsFeatures() {
  const features = useContext(FeaturesContext);
  return (
    <StyledProductsFeatures>
      <Title hstyle="medium">Почему фермерские продукты лучше?</Title>
      <ProductsfeaturesList>
        {features.map((feature, index) => (
          <ProductsFeaturesItem type={feature.type} key={index}>
            <FeatureItem {...feature} />
          </ProductsFeaturesItem>
        ))}
      </ProductsfeaturesList>
      <Button link={AppRoute.BUY}>Купить</Button>
    </StyledProductsFeatures>
  );
}
