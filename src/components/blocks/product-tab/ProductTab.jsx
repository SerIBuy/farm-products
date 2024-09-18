import styled from "styled-components";

const ProductTab = styled.span`
  background-color: #f6f6f6;
  padding: 8px 12px;
  border: none;

  ${(props) => props.activetabstyle};
`;

const ProductTabItem = styled.li``;

export { ProductTab, ProductTabItem };
