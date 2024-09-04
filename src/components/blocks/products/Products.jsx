import ProductCard from "../../ui/product-card/ProductCard";
import Title, { TitleSize } from "../../ui/title/Title";
import Button from "../../ui/button/Button";
import "./Products.css";

export default function Products({ products }) {
  return (
    <section className="products">
      <Title>Почему фермерские продукты лучше?</Title>
      <ul className="products__list">
        {products.map((product) => (
          <li
            className={`products__item products__item--${product.type.toLowerCase()}`}
            key={product.id}
          >
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
      <Button minWidth={260}>Купить</Button>
    </section>
  );
}
