import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import "../styles/TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value); //할 일칸에 입력한 값
  };

  //입력이 끝난 다음에
  const onSubmit = (e) => {
    e.preventDefault();
    setValue(""); //입력뒤 초기화
    onInsert(value); //todos 배열이 밖에 있고 todos 배열에 value(할일)을 추가해주는 함수
  };

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={value}
        placeholder="할 일을 입력하세요."
      ></input>
      <button type="submit">
        <MdAdd /> {/* 아이콘 */}
      </button>
    </form>
  );
};

export default TodoInsert;
