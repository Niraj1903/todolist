import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodoItem = () => {
    if (input.trim() === "") return;
    const newItem = {
      id: todoList.length + 1,
      item: input,
      completed: false,
    };
    setTodoList((prev) => [...prev, newItem]);
    setInput("");
  };

  const toggleCheckbox = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      })
    );
  };

  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodoItem()}>Add</button>
      <ul>
        {todoList.map((t) => (
          <li key={t.id}>
            <input
              onChange={() => toggleCheckbox(t.id)}
              type="checkbox"
              checked={t.completed}
            />
            <span className={t.completed ? "line-through" : ""}>{t.item}</span>
            <button onClick={() => handleDeleteTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
