import Logo from "../../ui/logo/Logo";
import Button from "../../ui/button/Button";
import Styledheader from "./StyledHeader";

export default function Header() {
  return (
    <Styledheader>
      <Logo />
      <Button>Купить</Button>
    </Styledheader>
  );
}
