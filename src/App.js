import { useState } from "react";
import "./App.css";

function App() {
  const targetValue = (e) => {
    setInput(e.target.value);
  };

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: input,
      completed: false,
    },
  ]);

  return (
    <div className="App">
      <input
        value={input}
        type="text"
        placeholder="Enter the list"
        onChange={targetValue}
      />

      <button onClick={newTodo}>Add</button>

      <ul>
        {todos.map((item) => (
          <li>
            <input type="checkbox" />
            <span>{item.text}</span>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
