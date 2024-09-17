import styled from "styled-components";

const StyledOrder = styled.div`
  padding: 24px 20px 20px 20px;
  width: 353px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);

  grid-area: 2 / 1 / 3 / 2;
`;

const OrderForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const OrderInput = styled.input`
  width: 313px;
  padding: 13px;
`;

const OrderPrice = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 31px;
`;

export { StyledOrder, OrderForm, OrderInput, OrderPrice };
