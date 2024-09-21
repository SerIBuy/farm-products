import styled from "styled-components";
import { visuallyHidden } from "../../app/styles";
import inputArrow from "../../../assets/input-arrow.svg";

const StyledFilter = styled.div`
  padding: 24px 20px 26px;
  width: 353px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const FilterList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

const FilterItem = styled.li``;

const FilterInput = styled.input`
  ${visuallyHidden}

  &:checked ~ span::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 12px;
    background-image: url(${inputArrow});
  }
`;

const CustomInput = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #fc9b27;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Filterlabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export {
  StyledFilter,
  FilterList,
  FilterItem,
  Filterlabel,
  FilterInput,
  CustomInput,
};
