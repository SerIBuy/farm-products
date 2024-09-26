import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../main/Main";
import { Outlet } from "react-router-dom";

export default function PageWrapper() {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}
