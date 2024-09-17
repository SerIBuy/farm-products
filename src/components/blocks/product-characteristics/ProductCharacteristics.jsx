import {
  StyledProductCharacteristics,
  ProductCharacteristicsItem,
  ProductCharacteristicsTitle,
  ProductCharacteristicsValue,
} from "./styled";

export default function ProductCharacteristics({ characteristics }) {
  return (
    <StyledProductCharacteristics>
      <ProductCharacteristicsItem>
        <ProductCharacteristicsTitle>Масса: </ProductCharacteristicsTitle>
        <ProductCharacteristicsValue>
          {characteristics.weight}
        </ProductCharacteristicsValue>
      </ProductCharacteristicsItem>
      <ProductCharacteristicsItem>
        <ProductCharacteristicsTitle>
          Срок годности:
        </ProductCharacteristicsTitle>
        <ProductCharacteristicsValue>
          {characteristics.expirationDate}
        </ProductCharacteristicsValue>
      </ProductCharacteristicsItem>
      <ProductCharacteristicsItem>
        <ProductCharacteristicsTitle>Порода:</ProductCharacteristicsTitle>
        <ProductCharacteristicsValue>
          {characteristics.breed}
        </ProductCharacteristicsValue>
      </ProductCharacteristicsItem>
      <ProductCharacteristicsItem>
        <ProductCharacteristicsTitle>
          Место происхождения:
        </ProductCharacteristicsTitle>
        <ProductCharacteristicsValue>
          {characteristics.origin}
        </ProductCharacteristicsValue>
      </ProductCharacteristicsItem>
    </StyledProductCharacteristics>
  );
}
