import ProductCard from "../../ui/product-card/ProductCard";
import Title from "../../ui/titles/Title";
import Button from "../../ui/button/Button";
import "./Products.css";

export default function Products({ products }) {
  return (
    <section className="products">
      <Title hStyle="medium" level="2">
        Почему фермерские продукты лучше?
      </Title>
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
