import { StyledTitle, TitleSize } from "./StyledTitle";

export default function Title({ children, hstyle }) {
  return (
    <StyledTitle as={`h${TitleSize[hstyle].level}`} hstyle={hstyle}>
      {children}
    </StyledTitle>
  );
}
