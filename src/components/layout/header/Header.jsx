import Logo from "../../ui/logo/Logo";
import Button from "../../ui/button/Button";
import styled from "styled-components";

const Styledheader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 90px;
`;

export default function Header() {
  return (
    <Styledheader>
      <Logo />
      <Button>Купить</Button>
    </Styledheader>
  );
}
