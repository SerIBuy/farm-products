import styled from "styled-components";

const StyledFeatureItem = styled.article`
  display: grid;
  grid-template-columns: 40px auto;
  column-gap: 22px;
  padding: 20px;
`;

const FeatureImage = styled.img`
  width: 46px;
  height: 46px;
  grid-area: 1 / 1 / 3 / 2;
`;

const FeatureType = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  padding: 2px 10px;
  margin-bottom: 4px;
  width: fit-content;
  background-color: ${(props) => props.bgcolor};

  grid-area: 1 / 2 / 2 / 3;
`;

const FeatureDescription = styled.p`
  grid-area: 3 / 1 / 4 / 3;
  text-align: left;
  margin: 0;
  padding: 0;
`;

export { StyledFeatureItem, FeatureImage, FeatureType, FeatureDescription };
