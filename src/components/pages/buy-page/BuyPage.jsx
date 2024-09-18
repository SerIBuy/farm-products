import { MainBuyPage } from "./styled";
import Filter from "../../blocks/filter/Filter";
import MakeOrder from "../../blocks/make-order/MakeOrder";
import ProductsList from "../../blocks/products-list/ProductsList";
import { ProductProvider } from "../../blocks/product-context";
import { products } from "../../../mocks/mocks";
import { useState } from "react";

export default function BuyPage() {
  const [filter, setFilter] = useState();
  return (
    <ProductProvider value={products}>
      <MainBuyPage>
        <Filter />
        <MakeOrder />
        <ProductsList />
      </MainBuyPage>
    </ProductProvider>
  );
}
