import { StyledOrder, OrderForm, OrderInput, OrderPrice } from "./styled";
import Title from "../../ui/titles/Title";
import Button from "../../ui/button/Button";

export default function MakeOrder() {
  return (
    <StyledOrder>
      <OrderForm>
        <Title hstyle="small">Сделать заказ</Title>
        <OrderInput placeholder="Введите адрес доставки" />
        <span>Цена</span>
        <OrderPrice>1 200 руб.</OrderPrice>
        <Button>Купить</Button>
      </OrderForm>
    </StyledOrder>
  );
}
