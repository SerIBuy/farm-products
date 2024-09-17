import styled from "styled-components";

const StyledFilter = styled.div`
  padding: 24px 20px 26px;
  width: 353px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const FilterList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const FilterItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterInput = styled.input``;

const Filterlabel = styled.label``;

export { StyledFilter, FilterList, FilterItem, Filterlabel, FilterInput };
