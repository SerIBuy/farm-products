import { StyledLogo, StyledImgLogo, StyledSpanLogo } from "./styled";
import logo from "../../../assets/logo.svg";

export default function Logo() {
  return (
    <StyledLogo href="/">
      <StyledImgLogo src={logo} alt="Логотип" />
      <StyledSpanLogo>Фермерские продукты</StyledSpanLogo>
    </StyledLogo>
  );
}
