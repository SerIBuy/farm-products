import "./About.css";
import Title, { TitleSize } from "../../ui/title/Title";

export default function About() {
  return (
    <section className="about">
      <div className="about__wrapper" style={{ width: "637px" }}>
        <Title size={TitleSize.BIG}>
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
