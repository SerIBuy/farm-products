import { StyledLogo, StyledSpanLogo } from "./styled";
import ImageLogo from "./ImageLogo";

export default function Logo() {
  return (
    <StyledLogo href="/">
      <ImageLogo />
      <StyledSpanLogo>Фермерские продукты</StyledSpanLogo>
    </StyledLogo>
  );
}
