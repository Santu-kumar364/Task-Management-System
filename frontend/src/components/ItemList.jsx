import React from "react";
import LineItem from "./LineItem";

const ItemList = ({ filteredTodos, deleteTodo, todos, fetchError }) => {
  if (fetchError) {
    return <p className="error-message">{fetchError}</p>;
  }

  return (
    <div className="todo-list">
      {todos.length === 0 ? ( 
        <p className="empty-list-message">Todo list is empty.</p>
      ) : filteredTodos.length > 0 ? (
        filteredTodos.map((item, index) => (
          <LineItem key={item.id} item={item} index={index} deleteTodo={deleteTodo} />
        ))
      ) : (
        <p className="no-todos-message">No matching todos found.</p>
      )}
    </div>
  );
};

export default ItemList;



