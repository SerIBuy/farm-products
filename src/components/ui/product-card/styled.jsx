import styled from "styled-components";

const StyledProductCard = styled.article`
  display: grid;
  grid-template-columns: 40px auto;
  column-gap: 22px;
  padding: 20px;
`;

const ProductCardImage = styled.img`
  width: 46px;
  height: 46px;
  grid-area: 1 / 1 / 3 / 2;
`;

const ProductCardType = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  padding: 2px 10px;
  margin-bottom: 4px;
  width: fit-content;
  background-color: ${(props) => props.bgColor};

  grid-area: 1 / 2 / 2 / 3;
`;

const ProductCardDescription = styled.p`
  grid-area: 3 / 1 / 4 / 3;
  text-align: left;
  margin: 0;
  padding: 0;
`;

export {
  StyledProductCard,
  ProductCardImage,
  ProductCardType,
  ProductCardDescription,
};
