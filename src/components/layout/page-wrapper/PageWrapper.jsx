import MainPage from "../../pages/main-page/MainPage";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function PageWrapper() {
  return (
    <>
      <Header />
      <main>
        <MainPage />
      </main>
      <Footer />
    </>
  );
}
