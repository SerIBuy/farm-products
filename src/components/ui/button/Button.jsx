import { StyledButton } from "./styled";

export default function Button({ children, link }) {
  return (
    <StyledButton
      onClick={() => console.log("нажата кнопка Купить")}
      {...(link ? { href: link, as: "a" } : { type: "button" })}
    >
      {children}
    </StyledButton>
  );
}
