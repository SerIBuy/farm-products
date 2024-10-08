import styled from "styled-components";

const StyledProduct = styled.article`
  display: grid;
  grid-template-columns: auto 419px;

  padding: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 727px;
`;

const ProductImage = styled.img`
  display: block;

  grid-area: 1 / 1 / 5 / 2;
`;

const ProductPriceWeight = styled.span`
  background-color: #d8ecfe;
  width: fit-content;
  padding: 4px 8px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 700;
`;

export { StyledProduct, ProductImage, ProductPriceWeight };
