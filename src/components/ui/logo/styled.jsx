import styled from "styled-components";

const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  column-gap: 24px;
  text-decoration: none;
  color: #333333;
`;

const StyledImgLogo = styled.img`
  display: block;
`;

const StyledSpanLogo = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
`;

export { StyledImgLogo, StyledSpanLogo, StyledLogo };
