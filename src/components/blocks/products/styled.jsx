import styled from "styled-components";

const productColor = {
  FARM: "#e1edce",
  STORE: "#f8ddd7",
};

const StyledProducts = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 90px 100px;
`;

const ProductsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin-top: 44px;
  margin-bottom: 64px;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const ProductsItem = styled.li`
  width: 540px;
  height: 197px;
  background-color: ${(props) => props.type && productColor[props.type]};
`;

export { StyledProducts, ProductsList, ProductsItem };
