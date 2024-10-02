import React from "react";
import Button from "./Button";
import { func } from "prop-types";

export default {
  title: "Кнопка(Button)",
};

const Template = (args) => <Button {...args}>Кнопка</Button>;

export const ActiveButton = Template.bind({});

ActiveButton.args = {
  buttonDisabling: false,
};

export const DisabledButton = Template.bind({});

DisabledButton.args = {
  buttonDisabling: true,
};
