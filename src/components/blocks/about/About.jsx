import "./About.css";
import Title from "../../ui/titles/Title";

export default function About() {
  return (
    <section className="about">
      <div className="about__wrapper" style={{ width: "637px" }}>
        <Title hStyle="big" level="1">
          Магазин фермерских продуктов с доставкой
        </Title>
        <p className="about__description">
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </p>
      </div>
    </section>
  );
}
