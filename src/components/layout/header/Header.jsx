import Logo from "../../ui/logo/Logo";
import Button from "../../ui/button/Button";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Button minWidth={260}>Купить</Button>
    </header>
  );
}
