import { StyledButton } from "./styled";

export default function Button({
  children,
  link,
  buttonDisabling,
  onButtonClick,
}) {
  return (
    <StyledButton
      onClick={onButtonClick}
      {...(link ? { href: link, as: "a" } : { type: "button" })}
      disabled={buttonDisabling}
    >
      {children}
    </StyledButton>
  );
}
