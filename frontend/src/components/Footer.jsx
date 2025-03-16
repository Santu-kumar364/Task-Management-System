import React from "react";

const Footer = ({ todos, filteredTodos, searchItem }) => {
  return (
    <footer className="footer">
      {filteredTodos.length === 0 ? null : (
        <p>
          {searchItem.trim()
            ? `Showing: ${filteredTodos.length} out of ${todos.length} todos`
            : `Total Todos: ${todos.length}`}
        </p>
      )}
    </footer>
  );
};

export default Footer;


