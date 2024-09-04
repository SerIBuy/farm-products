import About from "../../blocks/about/About";
import Products from "../../blocks/products/Products";

export default function MainPage({ products }) {
  return (
    <>
      <About />
      <Products products={products} />
    </>
  );
}
