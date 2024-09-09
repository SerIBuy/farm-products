import styled from "styled-components";
import { ButtonElement } from "../../elements";

export const Button = styled(ButtonElement).attrs((props) => ({
  children: props.children,
}))`
  padding: 17px 98px;
  background-color: #fc9b27;

  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;

  &:hover {
    background-color: #fc7427;
  }

  &:active {
    background-color: #fc7427;
  }
`;

export default Button;
