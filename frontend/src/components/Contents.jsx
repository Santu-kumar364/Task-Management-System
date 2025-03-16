import React from "react";
import ItemList from "./ItemList";

const Contents = ({ deleteTodo, filteredTodos, fetchError, todos}) => {
  return (
    <div className="container">
      <h1 className="title">List Of Todos</h1>
      <ItemList 
        filteredTodos={filteredTodos} 
        deleteTodo={deleteTodo} 
        fetchError={fetchError}
        todos={todos} 
      />
    </div>
  );
};

export default Contents;



