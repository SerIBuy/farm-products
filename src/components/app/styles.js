import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
}
`;

export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
