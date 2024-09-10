import { StyledAbout, StyledAboutWrapper } from "./styled";
import Title from "../../ui/titles/Title";

export default function About() {
  return (
    <StyledAbout>
      <StyledAboutWrapper>
        <Title hstyle="big">Магазин фермерских продуктов с доставкой</Title>
        <p>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </p>
      </StyledAboutWrapper>
    </StyledAbout>
  );
}
