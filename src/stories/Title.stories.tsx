import React from "react";
import { storiesOf } from "@storybook/react";
import Title from "../components/Title/Title";

const defaultProps = {
  value: "Text",
};

const styledProps = {
  value: "Text",
  style: { fontSize: "3rem", color: "whitesmoke", fontWeight: "700" },
};

// Stories
storiesOf("Title", module)
  .add("default", () => <Title {...defaultProps} />)
  .add("styled", () => <Title {...styledProps} />);
