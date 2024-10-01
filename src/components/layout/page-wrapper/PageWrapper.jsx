import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../main/Main";
import { Outlet } from "react-router-dom";
import { StyledPageWrapper } from "./styled";

export default function PageWrapper() {
  return (
    <StyledPageWrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledPageWrapper>
  );
}
