import { StyledOrder, OrderForm, OrderPrice } from "./styled";
import OrderInput from "../order-input/OrderInput";
import Title from "../../ui/titles/Title";
import Button from "../../ui/button/Button";
import { OrderSpanPrice } from "../order-span-price/OrderSpanPrice";

export default function MakeOrder({
  priceOrder,
  buttonDisable,
  enterInput,
  value,
  onOrderButtonClick,
}) {
  return (
    <StyledOrder>
      <OrderForm>
        <Title hstyle="small" style={{ marginBottom: "24px" }}>
          Сделать заказ
        </Title>
        <OrderInput
          inputValue={value}
          changeInput={(value) => enterInput(value)}
          placeholder="Введите адрес доставки"
        />
        <OrderSpanPrice>Цена</OrderSpanPrice>
        <OrderPrice>{priceOrder} р.</OrderPrice>
        <Button
          buttonDisabling={buttonDisable}
          onButtonClick={onOrderButtonClick}
        >
          Купить
        </Button>
      </OrderForm>
    </StyledOrder>
  );
}
