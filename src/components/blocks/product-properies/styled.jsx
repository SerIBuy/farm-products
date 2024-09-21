import styled from "styled-components";

const StyledProductProperties = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProductPropertiesItem = styled.li``;

const ProductPropertiesTitle = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  white-space: nowrap;
  margin-right: 6px;
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
