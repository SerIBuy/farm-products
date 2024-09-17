import styled from "styled-components";

const StyledProductsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  grid-area: 1 / 2 / 4 / 3;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export { StyledProductsList };
