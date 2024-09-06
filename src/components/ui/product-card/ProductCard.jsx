import Title from "../titles/Title";
import "./ProductCard.css";

export const types = {
  FARM: "Фермерские продукты",
  STORE: "Магазинные продукты",
};

export default function ProductCard({ name, description, type, image, alt }) {
  return (
    <article className="product-card">
      <img
        src={`../src/assets/${image}`}
        className="product-card__image"
        width={46}
        height={46}
        alt={alt}
      />
      <span
        className={`product-card__type product-card__type--${type.toLowerCase()}`}
      >
        {types[type]}
      </span>
      <Title hStyle="small" level="3">
        {name}
      </Title>
      <p
        className="product-card__description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </article>
  );
}
