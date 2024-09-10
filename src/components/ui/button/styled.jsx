import styled from "styled-components";
import { ButtonElement } from "../../styled";

export const StyledButton = styled(ButtonElement)`
  padding: 17px 98px;
  background-color: ${(props) => props.theme.colorButtons};

  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.colorButtonsHover};
  }

  &:active {
    background-color: ${(props) => props.theme.colorButtonsHover};
  }
`;

export default StyledButton;
