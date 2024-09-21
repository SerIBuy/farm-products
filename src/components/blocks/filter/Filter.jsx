import {
  StyledFilter,
  FilterList,
  FilterItem,
  Filterlabel,
  FilterInput,
  CustomInput,
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
          {products && products.length > 1 ? (
            products.map((product, index) => (
              <FilterItem key={index}>
                <Filterlabel>
                  {product.title}
                  <FilterInput
                    type="checkbox"
                    onChange={(evt) => changeInput(evt.target.id)}
                    id={product.id}
                    name="filter"
                  />
                  <CustomInput />
                </Filterlabel>
              </FilterItem>
            ))
          ) : (
            <span>Пока нечего выбрать...</span>
          )}
        </FilterList>
      </form>
    </StyledFilter>
  );
}
