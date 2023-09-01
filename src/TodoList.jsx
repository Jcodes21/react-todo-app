import PropTypes from "prop-types"; // Import PropTypes
import { TodoItem } from "./TodoItem"; // Import TodoItem component

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => (
        <TodoItem
          {...todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

// Defining PropTypes for component
TodoList.propTypes = {
  todos: PropTypes.array.isRequired, // 'todos' should be an array and is required
  toggleTodo: PropTypes.func.isRequired, // 'toggleTodo' should be a function and is required
  deleteTodo: PropTypes.func.isRequired, // 'deleteTodo' should be a function and is required
};
