import styled from "styled-components";

const StyledOrder = styled.div`
  padding: 24px 20px 20px 20px;
  width: 353px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  grid-area: 2 / 1 / 3 / 2;
`;

const OrderForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const OrderPrice = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 31px;
  margin-bottom: 32px;
`;

export { StyledOrder, OrderForm, OrderPrice };
