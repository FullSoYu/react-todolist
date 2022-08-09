import "../styles/TodoTemplate.scss";
//chldren 은 app.js에서 TodoTemplate 태그 사이에 값을 받아온다.
const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">Todo List</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
