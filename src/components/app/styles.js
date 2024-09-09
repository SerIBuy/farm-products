import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "../../themes/default";

export const GlobalStyle = createGlobalStyle`

body {
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
}
`;
