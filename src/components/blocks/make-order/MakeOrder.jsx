import { StyledOrder, OrderForm, OrderPrice } from "./styled";
import OrderInput from "../order-input/OrderInput";
import Title from "../../ui/titles/Title";
import Button from "../../ui/button/Button";

export default function MakeOrder({
  priceOrder,
  buttonDisable,
  enterInput,
  value,
}) {
  return (
    <StyledOrder>
      <OrderForm>
        <Title hstyle="small">Сделать заказ</Title>
        <OrderInput
          inputValue={value}
          changeInput={(value) => enterInput(value)}
          placeholder="Введите адрес доставки"
        />
        <span>Цена</span>
        <OrderPrice>{priceOrder} р.</OrderPrice>
        <Button buttonDisabling={buttonDisable}>Купить</Button>
      </OrderForm>
    </StyledOrder>
  );
}
