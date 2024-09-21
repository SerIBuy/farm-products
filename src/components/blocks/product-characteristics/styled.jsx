import styled from "styled-components";

const StyledProductCharacteristics = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const ProductCharacteristicsItem = styled.li``;

const ProductCharacteristicsTitle = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  margin-right: 6px;
`;

const ProductCharacteristicsValue = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`;

export {
  StyledProductCharacteristics,
  ProductCharacteristicsItem,
  ProductCharacteristicsTitle,
  ProductCharacteristicsValue,
};
