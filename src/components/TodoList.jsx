import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const todo = useSelector(state => state.todo.todos)
  return (
    <ul>
      {todo.map((el) => (
        <TodoItem
          key={el.id}
          {...el}
        />
      ))}
    </ul>
  );
};
