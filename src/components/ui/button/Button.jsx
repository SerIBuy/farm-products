import styled from "styled-components";
import { ButtonElement } from "../../elements";

const StyledButton = styled(ButtonElement)`
  padding: 17px 98px;
  background-color: #fc9b27;

  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;

  &:hover {
    background-color: #ec8811;
  }

  &:active {
    background-color: #e57e03;
  }
`;

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
