import styled from "styled-components";
import AboutMan from "../../../assets/about-man.svg";

const StyledAbout = styled.section`
  position: relative;
  padding: 183px 90px;
  background-color: #d8ecfe;

  &::after {
    content: "";
    position: absolute;
    width: 273px;
    height: 544px;
    bottom: 0;
    right: 177px;
    background: url(${AboutMan});
  }

  &::before {
    content: "";
    position: absolute;
    top: 76px;
    right: 90px;
    width: 446px;
    height: 447px;
    background-color: #c4e2ff;
    border-radius: 50%;
  }
`;

const StyledAboutWrapper = styled.div`
  width: 637px;
`;

const StyledAboutDescription = styled.p`
  font-family: var(--general-font);
`;

export { StyledAbout, StyledAboutWrapper, StyledAboutDescription };
