import { StyledButton } from "./styled";

export default function Button({ children, link, buttonDisabling }) {
  return (
    <StyledButton
      onClick={() => console.log("нажата кнопка Купить")}
      {...(link ? { href: link, as: "a" } : { type: "button" })}
      disabled={buttonDisabling}
    >
      {children}
    </StyledButton>
  );
}
