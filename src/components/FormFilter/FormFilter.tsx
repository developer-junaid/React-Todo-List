import React from "react";
import classes from "./formFilter.module.css";

const FormFilter = () => {
  return (
    <div className={classes.select}>
      <select name="todos" className={classes.filterTodo}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
};

export default FormFilter;
