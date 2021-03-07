import React from "react";
import classes from "./title.module.css";

interface TitleType {
  value: string;
}

const Title = ({ value }: TitleType) => {
  return (
    <header className={classes.header}>
      <h1>{value}</h1>
    </header>
  );
};

export default Title;
