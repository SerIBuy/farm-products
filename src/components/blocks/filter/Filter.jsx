import {
  StyledFilter,
  FilterList,
  FilterItem,
  Filterlabel,
  FilterInput,
} from "./styled";
import Title from "../../ui/titles/Title";
import { useContext } from "react";
import { ProductContext } from "../product-context";

export default function Filter({ changeInput }) {
  const products = useContext(ProductContext);
  return (
    <StyledFilter>
      <Title hstyle="small">Выберите продукты</Title>
      <form action="">
        <FilterList>
          {products &&
            products.length &&
            products.map((product, index) => (
              <FilterItem key={index}>
                <Filterlabel>{product.title}</Filterlabel>
                <FilterInput type="checkbox" onChange={() => changeInput} />
              </FilterItem>
            ))}
        </FilterList>
      </form>
    </StyledFilter>
  );
}
