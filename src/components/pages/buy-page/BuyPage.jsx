import { MainBuyPage } from "./styled";
import Filter from "../../blocks/filter/Filter";
import MakeOrder from "../../blocks/make-order/MakeOrder";
import ProductsList from "../../blocks/products-list/ProductsList";
import SideBar from "../../blocks/sidebar/SideBar";
import { ProductProvider } from "../../blocks/product-context";
import { products } from "../../../mocks/mocks";
import { useState } from "react";

export default function BuyPage() {
  const [filters, setFilter] = useState([]);
  let [sumOrder, setSumOrder] = useState(0);

  function inputHandler(id) {
    console.log(id);
    let inputs = [];
    let sum = 0;

    document.getElementById(id).scrollIntoView(true);

    const checkedFilters = document.querySelectorAll(
      "#filter-form input:checked"
    );
    checkedFilters.forEach((element) => {
      inputs.push(products[element.id]);
    });

    setFilter(inputs);

    inputs.map((el) => (sum += parseInt(products[el.id].pricePerWeight.price)));

    setSumOrder(sum);
  }
  return (
    <ProductProvider value={products}>
      <MainBuyPage>
        <SideBar>
          <Filter changeInput={(id) => inputHandler(id)} />
          <MakeOrder priceOrder={sumOrder} />
        </SideBar>
        <ProductsList checkedFilters={filters} />
      </MainBuyPage>
    </ProductProvider>
  );
}
