import { styled } from "styled-components";

const TitleSize = {
  small: {
    level: "3",
    fontSize: "18",
    lineHeight: "27",
    marginBottom: "16",
  },
  medium: {
    level: "2",
    fontSize: "36",
    lineHeight: "41",
    marginBottom: "64",
  },
  big: {
    level: "1",
    fontSize: "44",
    lineHeight: "50",
    marginBottom: "24",
  },
};

const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: ${(props) => props.hstyle && TitleSize[props.hstyle].fontSize}px;
  line-height: ${(props) =>
    props.hstyle && TitleSize[props.hstyle].lineHeight}px;
  width: fit-content;
  margin-bottom: ${(props) =>
    props.hstyle && TitleSize[props.hstyle].marginBottom}px;
`;

export { StyledTitle, TitleSize };
