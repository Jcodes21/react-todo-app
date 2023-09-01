import React from "react";
import PropTypes from "prop-types"; 

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}

// Define PropTypes for your component
NewTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, // `onSubmit` should be a required function prop
};
