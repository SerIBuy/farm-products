import StyledFilter from "./styled";
import Title from "../../ui/titles/Title";

export default function Filter({ products }) {
  return (
    <StyledFilter>
      <Title hstyle="small">Выберите продукты</Title>
      <form action="">
        <ul>
          {products &&
            products.length &&
            products.map((product) => <li>{product.title}</li>)}
        </ul>
      </form>
    </StyledFilter>
  );
}
