import React from "react";
import classes from "./formInput.module.css";
import { FormInputPropsType } from "../../types/types";
import FormButton from "../FormButton/FormButton";

const FormInput: React.FC<FormInputPropsType> = ({ setInput, input }) => {
  return (
    <div className={classes.inputContainer}>
      <input
        type="text"
        className={classes.todoInput}
        value={input}
        maxLength={18}
        onChange={(e) => setInput({ title: e.target.value })}
      />
      <FormButton />
    </div>
  );
};

export default FormInput;
