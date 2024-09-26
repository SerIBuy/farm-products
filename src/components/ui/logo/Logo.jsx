import { StyledLogoActive, StyledLogoCurrent, StyledSpanLogo } from "./styled";
import { ReactComponent as ImageLogo } from "../../../assets/logo.svg";
import { AppRoute } from "../../../const";
import { useLocation } from "react-router-dom";

export default function Logo({ pathname, isActive }) {
  return isActive ? (
    <StyledLogoCurrent>
      <ImageLogo />
      <StyledSpanLogo>Фермерские продукты</StyledSpanLogo>
    </StyledLogoCurrent>
  ) : (
    <StyledLogoActive to={AppRoute.MAIN}>
      <ImageLogo />
      <StyledSpanLogo>Фермерские продукты</StyledSpanLogo>
    </StyledLogoActive>
  );
}
