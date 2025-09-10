import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleInputText = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    setTodoList((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your Todo"
        value={input}
        onChange={(e) => handleInputText(e)}
      />
      <button onClick={addTodo}>Add</button>
      {todoList.map((item) => (
        <>
          <li key={item}> {item}</li>
          <button>X</button>
        </>
      ))}
    </>
  );
}

export default App;
