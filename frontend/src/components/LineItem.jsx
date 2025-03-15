import React from "react";
import { RxCross2 } from "react-icons/rx";

const LineItem = ({ item, index, deleteTodo }) => {
  return (
    <div className="todo-item">
        <p className="todo-text">
            {index + 1}. {item.title}
        </p>
        <button 
        onClick={() => deleteTodo(item.id)} className="delete-button">
            <RxCross2 size={20} color="red" />
        </button>
    </div>
  );
};

export default LineItem;
