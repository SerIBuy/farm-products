import { MainBuyPage } from "./styled";
import Filter from "../../blocks/filter/Filter";
import { products } from "../../../mocks/mocks";

export default function BuyPage() {
  return (
    <MainBuyPage>
      <Filter products={products} />
    </MainBuyPage>
  );
}
