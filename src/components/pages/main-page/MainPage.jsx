import About from "../../blocks/about/About";
import ProductsFeatures from "../../blocks/products-features/ProductsFeatures";
import { FeaturesProvider } from "../../blocks/features-context";
import { features } from "../../../mocks/mocks";

export default function MainPage() {
  return (
    <main>
      <FeaturesProvider value={features}>
        <About />
        <ProductsFeatures />
      </FeaturesProvider>
    </main>
  );
}
