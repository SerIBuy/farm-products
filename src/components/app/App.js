import { productsData } from '../../mocks/mocks';
import PageWrapper from '../layout/page-wrapper/PageWrapper';
import './App.css';

function App() {
  return (
    <PageWrapper products={productsData} />
  )
}

export default App;
