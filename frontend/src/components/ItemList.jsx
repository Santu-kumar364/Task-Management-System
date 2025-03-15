import React from "react";
import LineItem from "./LineItem";

const ItemList = ({ filteredTodos, deleteTodo }) => {
  return (
    <div className="todo-list">
      {filteredTodos.length > 0 ? (
        filteredTodos.map((item, index) => (
          <LineItem 
            key={item.id} 
            item={item} 
            index={index}
            deleteTodo={deleteTodo} 
           />
        ))
      ) : (
        <p>No matching todos found.</p>
      )}
    </div>
  );
};

export default ItemList;
