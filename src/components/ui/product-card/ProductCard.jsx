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
    bgcolor: "#88aa4d",
  },
  STORE: {
    title: "Магазинные продукты",
    bgcolor: "#f75531",
  },
};

export default function ProductCard({ name, description, type, image, alt }) {
  return (
    <StyledProductCard>
      <ProductCardImage src={image} alt={alt} />
      <ProductCardType bgcolor={types[type].bgcolor}>
        {types[type].title}
      </ProductCardType>
      <Title hstyle="small">{name}</Title>
      <ProductCardDescription
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </StyledProductCard>
  );
}
