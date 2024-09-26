import { type } from "@testing-library/user-event/dist/type";
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
      {...(link
        ? { to: link }
        : {
            as: "button",
            type: "button",
            style: { border: "none", cursor: "pointer" },
          })}
      disabled={buttonDisabling}
    >
      {children}
    </StyledButton>
  );
}
