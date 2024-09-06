import Logo from "../../ui/logo/Logo";
import { StyledFooter, StyledFooterText } from "./styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <StyledFooterText>Создано 2021</StyledFooterText>
    </StyledFooter>
  );
}
