import React from "react";
import { storiesOf } from "@storybook/react";
import FormInput from "./../components/FormInput/FormInput";

const defaultProps = {
  input: "",
  setInput: () => {},
};

const populatedProps = {
  input: "Some value",
  setInput: () => {},
};

// Stories
storiesOf("FormInput", module)
  .add("default", () => <FormInput {...defaultProps} />)
  .add("populated", () => <FormInput {...populatedProps} />);
