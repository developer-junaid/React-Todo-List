import React from "react";
import classes from "./form.module.css";
import FormFilter from "../FormFilter/FormFilter";
import FormButton from "../FormButton/FormButton";
import FormInput from "../FormInput/FormInput";

const Form = () => {
  return (
    <form>
      <FormInput />
      <FormButton />
      <FormFilter />
    </form>
  );
};

export default Form;
