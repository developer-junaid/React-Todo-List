import React from "react";
import classes from "./title.module.css";
import { TitlePropsType } from "../../types/types";

const Title: React.FC<TitlePropsType> = ({ value }) => {
  return (
    <header className={classes.header}>
      <h1>{value}</h1>
    </header>
  );
};

export default Title;
