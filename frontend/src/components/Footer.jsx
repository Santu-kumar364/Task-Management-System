import React from "react";

const Footer = ({todos, filteredTodos}) => {
  return (
      <div className="footer">
        Total Todos: {todos.length} | Showing: {filteredTodos.length}
      </div>
  );
};

export default Footer;
