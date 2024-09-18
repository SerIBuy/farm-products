import { StyledProductsList } from "./styled";
import Product from "../product/Product";

export default function ProductsList({ checkedFilters }) {
  console.log(checkedFilters);
  return (
    <StyledProductsList>
      {checkedFilters && checkedFilters.length < 1 ? (
        <span>Выберите продукты для заказа</span>
      ) : (
        checkedFilters.map((element) => <Product product={element} />)
      )}
    </StyledProductsList>
  );
}
