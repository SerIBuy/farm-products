import styled from "styled-components";

const StyledProduct = styled.article`
  display: grid;
  grid-template-columns: repeat(2, auto);

  padding: 20px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 727px;
`;

const ProductImage = styled.img`
  display: block;

  grid-area: 1 / 1 / 5 / 2;
`;

const ProductDescription = styled.p``;

const ProductPriceWeight = styled.span`
  background-color: #d8ecfe;
  width: fit-content;
  padding: 4px 8px;
`;

export { StyledProduct, ProductImage, ProductDescription, ProductPriceWeight };
