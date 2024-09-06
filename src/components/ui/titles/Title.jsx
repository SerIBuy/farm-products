import { styled } from "styled-components";
import { H1, H2, H3 } from "../../elements";

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

function Title({ children, level, hStyle }) {
  const Hlevel = `H${level}`;

  const StyledTitle = styled(Hlevel)`
    font-weight: 700;
    font-size: ${(props) => props.hStyle && TitleSize[props.hStyle].fontSize}px;
    line-height: ${(props) =>
      props.hStyle && TitleSize[props.hStyle].lineHeight}px;
    width: fit-content;
    margin-bottom: ${(props) =>
      props.hStyle && TitleSize[props.hStyle].marginBottom}px;
  `;

  return <StyledTitle hStyle={hStyle}>{children}</StyledTitle>;
}

export { Title as default, TitleSize };
