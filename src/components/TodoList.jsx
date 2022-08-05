import React from "react";
import TodoListItem from "./TodoListItem";
import "../styles/TodoList.scss";

const TodoList = ({ todos, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;
