import React from "react";
import classes from "./formInput.module.css";

const FormInput = ({ setInput, input }) => {
  return (
    <input
      type="text"
      className={classes.todoInput}
      value={input}
      onChange={(e) => setInput({ title: e.target.value })}
    />
  );
};

export default FormInput;
