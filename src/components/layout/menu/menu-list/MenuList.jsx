import { StyledMenuList } from "./styled";
import MenuItem from "../menu-item/MenuItem";
import { AppRoute } from "../../../../const";

export default function MenuList() {
  return (
    <StyledMenuList>
      <MenuItem link={AppRoute.MAIN}>Главная</MenuItem>
    </StyledMenuList>
  );
}
