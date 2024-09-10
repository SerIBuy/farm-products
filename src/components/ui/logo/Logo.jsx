import { StyledLogo, StyledSpanLogo } from "./styled";
import { ReactComponent as ImageLogo } from "../../../assets/logo.svg";

export default function Logo() {
  return (
    <StyledLogo href="/">
      <ImageLogo />
      <StyledSpanLogo>Фермерские продукты</StyledSpanLogo>
    </StyledLogo>
  );
}
