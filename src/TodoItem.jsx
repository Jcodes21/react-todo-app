import PropTypes from "prop-types"; // Import PropTypes

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}

// Defining PropTypes for component
TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired, // 'completed' should be a boolean and is required
  id: PropTypes.string.isRequired, // 'id' should be a string and is required
  title: PropTypes.string.isRequired, // 'title' should be a string and is required
  toggleTodo: PropTypes.func.isRequired, // 'toggleTodo' should be a function and is required
  deleteTodo: PropTypes.func.isRequired, // 'deleteTodo' should be a function and is required
};
