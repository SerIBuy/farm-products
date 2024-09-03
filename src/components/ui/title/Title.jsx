import React from "react";
import "./Title.css";

export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  DEFAULT: "",
};

export default function Title({ children, size }) {
  return <h1 className={`title${size ? ` title_${size}` : ""}`}>{children}</h1>;
}
