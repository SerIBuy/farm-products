import {
  StyledFilter,
  FilterList,
  FilterItem,
  Filterlabel,
  FilterInput,
} from "./styled";
import Title from "../../ui/titles/Title";
import { useContext, useRef } from "react";
import { ProductContext } from "../product-context";

export default function Filter({ changeInput }) {
  const products = useContext(ProductContext);
  const divForm = useRef(null);
  return (
    <StyledFilter>
      <Title hstyle="small">Выберите продукты</Title>
      <form action="#" ref={divForm} id="filter-form">
        <FilterList>
          {products &&
            products.length &&
            products.map((product, index) => (
              <FilterItem key={index}>
                <Filterlabel>{product.title}</Filterlabel>
                <FilterInput
                  type="checkbox"
                  onChange={(evt) => changeInput(evt.target.id)}
                  id={product.id}
                  name="filter"
                />
              </FilterItem>
            ))}
        </FilterList>
      </form>
    </StyledFilter>
  );
}
