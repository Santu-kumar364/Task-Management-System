import axios from "axios";
import React, { useEffect, useState } from "react";
import "../index.css"; // Importing the styles
import { RxCross2 } from "react-icons/rx";

const api = "http://localhost:8080/api/todos";

export const Home = () => {
  const [title, setTitle] = useState();
  const [todos, SetTodos] = useState([]);

  useEffect(() => {
    fetchAllTodos();
  }, []);

  const createTodo = async () => {
    const todo = { title };

    try {
      const { data } = await axios.post(`${api}`, todo);
      SetTodos([...todos, data]);
      console.log(todo);
    } catch (error) {
      console.log("catch error: ", error);
    }
  };

  const fetchAllTodos = async () => {
    try {
      const { data } = await axios.get(`${api}`);
      SetTodos(data);
      console.log("all todos ", data);
    } catch (error) {
      console.log("catch error: ", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${api}/${id}`);
      SetTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log("catch error: ", error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <input
          className="input"
          placeholder="Add New Task"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={createTodo} className="add-button">
          Add
        </button>
      </div>
      <h1 className="title">List Of Todo</h1>
      <div className="todo-list">
        {todos.map((item, index) => (
          <div className="todo-item" key={item.id}>
            <p className="todo-text">
              {index + 1}. {item.title}
            </p>
            <button onClick={() => deleteTodo(item.id)} className="delete-button">
            <RxCross2 size={20} color="red" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
