import styled from "styled-components";

const StyledProductProperties = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProductPropertiesItem = styled.li`
  display: flex;
  gap: 6px;
`;

const ProductPropertiesTitle = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
`;

const ProductPropertiesValue = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`;

export {
  StyledProductProperties,
  ProductPropertiesItem,
  ProductPropertiesTitle,
  ProductPropertiesValue,
};
