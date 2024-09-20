import StyledOrderInput from "./styled";

export default function OrderInput({
  children,
  placeholder,
  inputValue,
  changeInput,
}) {
  return (
    <StyledOrderInput
      value={inputValue}
      placeholder={placeholder}
      onChange={(evt) => changeInput(evt.target.value)}
    >
      {children}
    </StyledOrderInput>
  );
}
