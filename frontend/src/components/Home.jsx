import axios from "axios";
import React, { useEffect, useState } from "react";
import "../index.css";
import { RxCross2 } from "react-icons/rx";
import SearchItems from "./SearchItems";

const api = "http://localhost:8080/api/todos";

export const Home = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    fetchAllTodos();
  }, []);

  const createTodo = async () => {
    if (!title.trim()) return; // To prevent adding empty tasks

    const todo = { title };

    try {
      const { data } = await axios.post(`${api}`, todo);
      setTodos([...todos, data]);
      setTitle(""); // Clear input field after adding
    } catch (error) {
      console.log("catch error: ", error);
    }
  };

  const fetchAllTodos = async () => {
    try {
      const { data } = await axios.get(`${api}`);
      setTodos(data);
    } catch (error) {
      console.log("catch error: ", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${api}/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log("catch error: ", error);
    }
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="container">
      <SearchItems 
      searchItem={searchItem}
      setSearchItem={setSearchItem} 
      />
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

      <h1 className="title">List Of Todos</h1>
      <div className="todo-list">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((item, index) => (
            <div className="todo-item" key={item.id}>
              <p className="todo-text">
                {index + 1}. {item.title}
              </p>
              <button onClick={() => deleteTodo(item.id)} className="delete-button">
                <RxCross2 size={20} color="red" />
              </button>
            </div>
          ))
        ) : (
          <p>No matching todos found.</p>
        )}
      </div>
    </div>
  );
};
