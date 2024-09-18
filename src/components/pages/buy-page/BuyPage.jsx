import { MainBuyPage } from "./styled";
import Filter from "../../blocks/filter/Filter";
import MakeOrder from "../../blocks/make-order/MakeOrder";
import ProductsList from "../../blocks/products-list/ProductsList";
import { ProductProvider } from "../../blocks/product-context";
import { products } from "../../../mocks/mocks";
import { useState } from "react";

export default function BuyPage() {
  const [filters, setFilter] = useState([]);
  function inputHandler() {
    let inputs = [];
    const checkedFilters = document.querySelectorAll(
      "#filter-form input:checked"
    );
    checkedFilters.forEach((element) => inputs.push(products[element.id]));
    setFilter(inputs);
  }
  return (
    <ProductProvider value={products}>
      <MainBuyPage>
        <Filter changeInput={() => inputHandler()} />
        <MakeOrder />
        <ProductsList checkedFilters={filters} />
      </MainBuyPage>
    </ProductProvider>
  );
}
