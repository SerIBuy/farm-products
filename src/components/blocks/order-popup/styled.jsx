import styled from "styled-components";

export const StyledOrderPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border: 2px solid #fc9b27;
  background-color: #fff;
  width: 500px;
  min-height: 200px;
  padding: 40px;
`;

export const PopupList = styled.ol`
  margin: 0;
  margin-bottom: 30px;
`;

export const PopupItem = styled.li``;

export const PopupSpan = styled.span`
  display: inline-block;
  margin-bottom: 30px;
`;

export const PopupClose = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  border: 1px solid #fc9b27;
  background-color: #fff;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: #fc9b27;
    width: 20px;
    height: 2px;
    left: 4px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
