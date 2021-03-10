export interface TodosType {
  title: string;
  completed: boolean;
}

export interface TitleType {
  value: string;
}

export interface TodosFormType {
  todos: {
    title: string;
  }[];
}

export interface FilterType {
  setTodos: Array<{
    key: string;
    value: string;
  }>;
  ([{ key, value }]);
}

export interface TodoListType {
  todos: {
    title: string;
  }[];
}

export interface TodoItemType {
  title: string;
}
