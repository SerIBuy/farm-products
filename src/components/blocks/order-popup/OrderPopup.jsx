import {
  StyledOrderPopup,
  PopupList,
  PopupItem,
  PopupSpan,
  PopupClose,
} from "./styled";
import Title from "../../ui/titles/Title";
import Button from "../../ui/button/Button";
import { useEffect, useRef } from "react";

export default function OrderPopup({ listOrder, price, adress, onClose }) {
  const closeRef = useRef(null);

  const escKeydownHandler = (evt) => (evt.key === "Escape" ? onClose() : null);

  useEffect(() => {
    closeRef.current.addEventListener("click", onClose);
    document.addEventListener("keydown", escKeydownHandler);
    return () => {
      document.removeEventListener("keydown", escKeydownHandler);
    };
  }, []);
  return (
    <StyledOrderPopup>
      <Title hstyle="small">Ваш заказ</Title>
      <PopupList>
        {listOrder &&
          listOrder.length &&
          listOrder.map((item) => <PopupItem>{item.title}</PopupItem>)}
      </PopupList>
      <b>Сумма заказа: </b> <PopupSpan>{price} р.</PopupSpan>
      <br />
      <b>Адрес доставки: </b> <PopupSpan>{adress}</PopupSpan>
      <Button onButtonClick={onClose}>Оплатить</Button>
      <PopupClose onClick={onClose} ref={closeRef} />
    </StyledOrderPopup>
  );
}
