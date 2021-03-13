import React from "react";
import classes from "./formInput.module.css";
import { FormInputPropsType } from "../../types/types";
import FormButton from "../FormButton/FormButton";

const FormInput: React.FC<FormInputPropsType> = ({ setInput, input }) => {
  return (
    <div>
      <input
        type="text"
        className={classes.todoInput}
        value={input}
        onChange={(e) => setInput({ title: e.target.value })}
      />
      <FormButton />
    </div>
  );
};

export default FormInput;
