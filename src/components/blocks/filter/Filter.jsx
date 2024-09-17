import {
  StyledFilter,
  FilterList,
  FilterItem,
  Filterlabel,
  FilterInput,
} from "./styled";
import Title from "../../ui/titles/Title";

export default function Filter({ products }) {
  return (
    <StyledFilter>
      <Title hstyle="small">Выберите продукты</Title>
      <form action="">
        <FilterList>
          {products &&
            products.length &&
            products.map((product) => (
              <FilterItem>
                <Filterlabel>{product.title}</Filterlabel>
                <FilterInput type="checkbox" />
              </FilterItem>
            ))}
        </FilterList>
      </form>
    </StyledFilter>
  );
}
