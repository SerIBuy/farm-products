import About from "../../blocks/about/About";
import ProductsFeatures from "../../blocks/products-features/ProductsFeatures";

export default function MainPage({ features }) {
  return (
    <main>
      <About />
      <ProductsFeatures features={features} />
    </main>
  );
}
