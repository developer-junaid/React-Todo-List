import React from "react";
import classes from "./formInput.module.css";
import { FormInputPropsType } from "../../types/types";

const FormInput: React.FC<FormInputPropsType> = ({ setInput, input }) => {
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
