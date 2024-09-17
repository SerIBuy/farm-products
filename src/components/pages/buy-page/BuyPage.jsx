import { MainBuyPage } from "./styled";
import Filter from "../../blocks/filter/Filter";
import { products } from "../../../mocks/mocks";
import MakeOrder from "../../blocks/make-order/MakeOrder";
import ProductsList from "../../blocks/products-list/ProductsList";

export default function BuyPage() {
  return (
    <MainBuyPage>
      <Filter products={products} />
      <MakeOrder />
      <ProductsList products={products} />
    </MainBuyPage>
  );
}
