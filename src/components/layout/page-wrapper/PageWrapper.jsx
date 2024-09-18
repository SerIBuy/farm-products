import MainPage from "../../pages/main-page/MainPage";
import BuyPage from "../../pages/buy-page/BuyPage";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function PageWrapper() {
  return (
    <>
      <div>
        <Header />
        {/* <MainPage /> */}
        <BuyPage />
        <Footer />
      </div>
    </>
  );
}
