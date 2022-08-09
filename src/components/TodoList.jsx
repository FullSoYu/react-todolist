import React from "react";
import "../styles/TodoList.scss";
import TodoListItem from "./TodoListItem";

// TodoListItem은 <li key={index}>{todo.text} </li> 에서 li를 대신해서 랜더링 한다

const TodoList = ({
  todos,
  onToggle,
  onRemove,
  onInsertToggle,
  onChageSelectedTodo,
}) => {
  return (
    <div className="TodoList">
      {todos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
          onRemove={onRemove}
          onToggle={onToggle}
          onInsertToggle={onInsertToggle}
          onChageSelectedTodo={onChageSelectedTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
