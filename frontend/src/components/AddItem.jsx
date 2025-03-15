import React from "react";

const AddItem = ({ title, setTitle, createTodo }) => {
  return (
    <div className="header">
      <input
        className="input"
        placeholder="Add New Task"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && createTodo()}
      />
      <button onClick={createTodo} className="add-button">
        Add
      </button>
    </div>
  );
};

export default AddItem;









