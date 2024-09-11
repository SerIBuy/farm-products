import Title from "../titles/Title";
import {
  StyledFeatureItem,
  FeatureImage,
  FeatureType,
  FeatureDescription,
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

export default function FeatureItem({ name, description, type, image, alt }) {
  return (
    <StyledFeatureItem>
      <FeatureImage src={image} alt={alt} />
      <FeatureType bgcolor={types[type].bgcolor}>
        {types[type].title}
      </FeatureType>
      <Title hstyle="small">{name}</Title>
      <FeatureDescription dangerouslySetInnerHTML={{ __html: description }} />
    </StyledFeatureItem>
  );
}
