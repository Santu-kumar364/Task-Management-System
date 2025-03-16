import Contents from "./components/Contents";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchItems from "./components/SearchItems";
import AddItem from "./components/AddItem";


function App() {
  const api = "http://localhost:8080/api/todos";

  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const fetchAllTodos = async () => {
      try {
        const { data } = await axios.get(`${api}`);
        setTodos(data);
      } catch (error) {
        setFetchError("Failed to load todos. Please try again.");
        console.log("catch error: ", error);
      }
    };

    fetchAllTodos();
  }, []);

  const createTodo = async () => {
    if (!title.trim()) {
      alert("Todo title cannot be empty!");
      return;
    }

    const todo = { title };
    try {
      const { data } = await axios.post(`${api}`, todo);
      setTodos([...todos, data]);
      setTitle(""); // Clear input field after adding
    } catch (error) {
      console.log("catch error: ", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${api}/${id}`);
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);

      if (updatedTodos.length === 0) {
        setSearchItem("");
      }
    } catch (error) {
      console.log("catch error: ", error);
    }
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <>
      <AddItem
        title={title}
        setTitle={setTitle}
        createTodo={createTodo}
      />
      <SearchItems 
        searchItem={searchItem} 
        setSearchItem={setSearchItem} 
      />
      <Contents
        deleteTodo={deleteTodo}
        filteredTodos={filteredTodos}
        fetchError={fetchError}
        todos={todos}
      />
      <Footer
        todos={todos}
        filteredTodos={filteredTodos}
        searchItem={searchItem}
      />
    </>
  );
}

export default App;





