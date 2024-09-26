import styled from "styled-components";
import { ButtonElement } from "../../styled";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  box-sizing: border-box;
  padding: 17px 106px;
  background-color: ${(props) => props.theme.colorButtons};

  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  width: 314px;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.colorButtonsHover};
  }

  &:not(:disabled):active {
    background-color: ${(props) => props.theme.colorButtonsHover};
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

export default StyledButton;
