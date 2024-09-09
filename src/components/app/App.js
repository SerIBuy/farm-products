import { productsData } from '../../mocks/mocks';
import PageWrapper from '../layout/page-wrapper/PageWrapper';
import { GlobalStyle } from './styles';

function App() {
  return (
    <>
    <GlobalStyle />
    <PageWrapper products={productsData} />
    </>
  )
}

export default App;
