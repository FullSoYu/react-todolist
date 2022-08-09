import React, { useRef, useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoEdit from "./components/TodoEdit";

const App = () => {
  const [todos, setTodos] = useState([]); //할 일을 저장할 todos 배열
  const [insertToggle, setInsertToggle] = useState(false); //insertToggle 이란 수정창이 on off로 반복하는 것
  const [selectedTodo, setSelectedTodo] = useState(null); // 선택한 할 일
  const nextId = useRef(1); // id를 만들어 줌 첫번째 아이디는 1 그리고 순차적으로 생성

  //TodoInsert에 작성해도 되지만 여기에 작성한 이유는 다른 컴포넌트에서도 사용 하기 위해
  const onInsert = (text) => {
    const todo = {
      id: nextId.current,
      text: text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo)); //concat이 map 함수처럼 사용하나?
    nextId.current++;
  };

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev); //id값이 필요 없음 창을 켰다 껏다만 하는 기능이라서 수정창을 켰다 껏다 하는 함수
  };

  const onChageSelectedTodo = (todo) => {
    setSelectedTodo((selectedTodo) => todo); //클릭 했을 때 할 일(todo)를 넣어주는 함수 => 이함수를 사용하면 todo를 넣겠다.
  };

  // 만든 할 일을 지우는 함수
  const onRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id)); // id가 아닌것만 남긴다. id가 일치하면 삭제한다 filter 함수
  };

  // 삭선 만드는 함수
  const onToggle = (id) => {
    setTodos(
      (todos) =>
        todos.map(
          (todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo //다 순회를 하면서 클릭한 id와 일치하면 내용은 그대로 두고 checked의 상태를 반전시킨다.
        ) // id가 다르면 맨 끝 오른쪽에 있는 todo로써 그대로 둔다
    );
  };
  //수정 하는 함수
  const onUpdate = (id, text) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
    onInsertToggle(); //TodoEgit에서 지운 이유는 수정 후에 창을 닫을려고
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} /> {/* 입력하는 컴포넌트*/}
      <TodoList
        todos={todos}
        onToggle={onToggle}
        onRemove={onRemove}
        onInsertToggle={onInsertToggle}
        onChageSelectedTodo={onChageSelectedTodo}
      />
      {insertToggle && (
        <TodoEdit
          onInsertToggle={onInsertToggle}
          selectedTodo={selectedTodo}
          onUpdate={onUpdate}
        />
      )}
      {/* isertToggle이 참이면 수정 창이 나오고 거짓이면 안나옴 TodoEdit은 무조건 참으로 서로가 참일 때 */}
    </TodoTemplate>
  );
};

export default App;
