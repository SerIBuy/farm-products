import { MainBuyPage } from "./styled";
import Filter from "../../blocks/filter/Filter";
import MakeOrder from "../../blocks/make-order/MakeOrder";
import ProductsList from "../../blocks/products-list/ProductsList";
import SideBar from "../../blocks/sidebar/SideBar";
import { ProductProvider } from "../../blocks/product-context";
import { products } from "../../../mocks/mocks";
import { useState } from "react";
import OrderPopup from "../../blocks/order-popup/OrderPopup";

export default function BuyPage() {
  const [filters, setFilter] = useState([]);
  let [sumOrder, setSumOrder] = useState(0);
  const [isButtonDisable, setIsButtonDisable] = useState(true);
  const [orderInput, setOrderInput] = useState("");
  const [isShowPopup, setIsShowPopup] = useState(false);

  let inputs = [];

  function inputFilterHandler(id) {
    let sum = 0;

    let checkedFilter = document.querySelector(`[article-name="${id}"]`);
    if (document.getElementById(id).checked) {
      checkedFilter.scrollIntoView(true);
    }

    const checkedFilters = document.querySelectorAll(
      "#filter-form input:checked"
    );
    checkedFilters.forEach((element) => {
      inputs.push(products[element.id]);
    });

    setFilter(inputs);

    inputs.map((el) => (sum += parseInt(products[el.id].pricePerWeight.price)));

    setSumOrder(sum);

    inputs.length > 0 && orderInput.length > 0
      ? setIsButtonDisable(false)
      : setIsButtonDisable(true);
  }

  function orderInputHandler(value) {
    value.length > 0 && filters.length > 0
      ? setIsButtonDisable(false)
      : setIsButtonDisable(true);

    setOrderInput(value);
  }

  return (
    <ProductProvider value={products}>
      <MainBuyPage>
        <SideBar>
          <Filter changeInput={(id) => inputFilterHandler(id)} />
          <MakeOrder
            priceOrder={sumOrder}
            buttonDisable={isButtonDisable}
            value={orderInput}
            enterInput={(value) => orderInputHandler(value)}
            onOrderButtonClick={() => setIsShowPopup(true)}
          />
        </SideBar>
        <ProductsList checkedFilters={filters} />
        {isShowPopup ? (
          <OrderPopup
            listOrder={filters}
            price={sumOrder}
            adress={orderInput}
            onClose={() => setIsShowPopup(false)}
          ></OrderPopup>
        ) : null}
      </MainBuyPage>
    </ProductProvider>
  );
}
