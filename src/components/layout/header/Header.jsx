import Logo from "../../ui/logo/Logo";
import Button from "../../ui/button/Button";
import StyledHeader from "./StyledHeader";
import { AppRoute } from "../../../const";
import { useLocation } from "react-router-dom";
import MenuList from "../menu/menu-list/MenuList";

export default function Header() {
  const { pathname } = useLocation();
  const isActivePage = pathname === AppRoute.MAIN;
  return (
    <StyledHeader>
      <Logo isActive={isActivePage} />
      {isActivePage ? (
        <Button link={AppRoute.BUY}>Купить</Button>
      ) : (
        <MenuList />
      )}
    </StyledHeader>
  );
}
