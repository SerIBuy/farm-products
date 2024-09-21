import MainPage from "../../pages/main-page/MainPage";
import BuyPage from "../../pages/buy-page/BuyPage";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../main/Main";

export default function PageWrapper() {
  return (
    <>
      <div>
        <Header />
        <Main>
          {/* <MainPage /> */}
          <BuyPage />
        </Main>
        <Footer />
      </div>
    </>
  );
}
