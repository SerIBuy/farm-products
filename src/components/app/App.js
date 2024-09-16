import { featuresData } from "../../mocks/mocks";
import PageWrapper from "../layout/page-wrapper/PageWrapper";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper features={featuresData} />
    </>
  );
}

export default App;
