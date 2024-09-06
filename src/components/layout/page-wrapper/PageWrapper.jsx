import MainPage from "../../pages/main-page/MainPage";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function PageWrapper({ ...props }) {
  return (
    <>
      <div>
        <Header />
        <main>
          <MainPage {...props} />
        </main>
        <Footer />
      </div>
    </>
  );
}
