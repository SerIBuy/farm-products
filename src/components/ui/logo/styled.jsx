import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLogoActive = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 24px;
  text-decoration: none;
  color: #333333;
`;

const StyledLogoCurrent = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
  color: #333333;
`;

const StyledSpanLogo = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
`;

export { StyledSpanLogo, StyledLogoActive, StyledLogoCurrent };
