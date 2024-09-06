import Title from "../titles/Title";
import {
  StyledProductCard,
  ProductCardImage,
  ProductCardType,
  ProductCardDescription,
} from "./styled";

export const types = {
  FARM: {
    title: "Фермерские продукты",
    bgColor: "#88aa4d",
  },
  STORE: {
    title: "Магазинные продукты",
    bgColor: "#f75531",
  },
};

export default function ProductCard({ name, description, type, image, alt }) {
  return (
    <StyledProductCard>
      <ProductCardImage src={`../../../assets/${image}`} alt={alt} />
      <ProductCardType bgColor={types[type].bgColor}>
        {types[type].title}
      </ProductCardType>
      <Title hStyle="small" level="3">
        {name}
      </Title>
      <ProductCardDescription
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </StyledProductCard>
  );
}
