import MainPage from "../../pages/main-page/MainPage";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Container.css";

export default function PageWrapper({ ...props }) {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <MainPage {...props} />
        </main>
        <Footer />
      </div>
    </>
  );
}
