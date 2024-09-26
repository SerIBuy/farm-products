import PageWrapper from "../layout/page-wrapper/PageWrapper";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import MainPage from "../pages/main-page/MainPage";
import BuyPage from "../pages/buy-page/BuyPage";
import ScrollToTop from "../blocks/ScrollToTop";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<BuyPage />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
