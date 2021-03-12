import React from "react";
import classes from "./formFilter.module.css";
import { FilterPropsType } from "../../types/types";

const FormFilter: React.FC<FilterPropsType> = ({ applyFilter }) => {
  return (
    <div className={classes.select}>
      <select
        name="todos"
        className={classes.filterTodo}
        onChange={(e) => {
          applyFilter(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
};

export default FormFilter;
