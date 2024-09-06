import {
  StyledAbout,
  StyledAboutWrapper,
  StyledAboutDescription,
} from "./styled";
import Title from "../../ui/titles/Title";

export default function About() {
  return (
    <StyledAbout>
      <StyledAboutWrapper>
        <Title hStyle="big" level="1">
          Магазин фермерских продуктов с доставкой
        </Title>
        <StyledAboutDescription>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </StyledAboutDescription>
      </StyledAboutWrapper>
    </StyledAbout>
  );
}
