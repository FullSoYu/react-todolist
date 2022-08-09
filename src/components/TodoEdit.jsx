import React, { useState } from "react";
import "../styles/TodoEdit.scss";

const TodoEdit = ({ onInsertToggle }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value); //수정창 안에 값을 입력하는 것까지 저장은 안됨
  };

  const onSubmit = (e) => {
    e.preventDefault(); //새로고침 없애는 내장 함수
    onInsertToggle(); // 수정창 껏다 켰다 하는 함수
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="todoedit__insert">
        <h2>수정하기</h2>
        <input
          onChange={onChange}
          value={value}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
};

export default TodoEdit;
