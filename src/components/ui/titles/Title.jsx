import { StyledTitle, TitleSize } from "./StyledTitle";

export default function Title({ children, hstyle, style }) {
  return (
    <StyledTitle
      as={`h${TitleSize[hstyle].level}`}
      hstyle={hstyle}
      style={style}
    >
      {children}
    </StyledTitle>
  );
}
