import React from "react";
import Title from "./Title";

export default {
  title: "Titles(Заголовки)",
};

const Template = (args) => <Title {...args}>заголовок</Title>;

export const Bigtitle = Template.bind({});
Bigtitle.args = {
  as: "h1",
  hstyle: "big",
  style: {
    marginTop: "20px",
  },
};

export const Smalltitle = Template.bind({});
Smalltitle.args = {
  as: "h3",
  hstyle: "small",
  style: {
    marginTop: "10px",
  },
};
