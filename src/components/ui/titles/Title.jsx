import { styled } from "styled-components";

const TitleSize = {
  small: {
    fontSize: "18",
    lineHeight: "27",
    marginBottom: "16",
  },
  medium: {
    fontSize: "36",
    lineHeight: "41",
    marginBottom: "64",
  },
  big: {
    fontSize: "44",
    lineHeight: "50",
    marginBottom: "24",
  },
};

const Title = styled.h1.attrs((props) => ({
  children: props.children,
  hStyle: props.hStyle,
}))`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: ${(props) => props.hStyle && TitleSize[props.hStyle].fontSize}px;
  line-height: ${(props) =>
    props.hStyle && TitleSize[props.hStyle].lineHeight}px;
  width: fit-content;
  margin-bottom: ${(props) =>
    props.hStyle && TitleSize[props.hStyle].marginBottom}px;
`;

export { Title as default, TitleSize };
