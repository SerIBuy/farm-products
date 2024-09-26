import { StyledMenuItem } from "./styled";
import { NavLink } from "react-router-dom";

const getStyleForNavLink = ({ isActive }) =>
  isActive
    ? {
        cursor: "default",
        color: "#000000",
        textDecoration: "none",
        padding: "20",
      }
    : { padding: "20", textDecoration: "none", color: "#000000" };

export default function MenuItem({ children, link }) {
  return (
    <StyledMenuItem>
      <NavLink style={getStyleForNavLink} to={link}>
        {children}
      </NavLink>
    </StyledMenuItem>
  );
}
