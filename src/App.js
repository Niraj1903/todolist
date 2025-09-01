import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  const addTodoItem = () => {
    const item = {
      id: 0,
      text: input,
      completed: false,
    };
    setTodoList([...todoList, item]);
    setInput("");
  };

  return (
    <>
      <div>
        <input
          className="border border-black m-2 px-2"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="enter todo"
          value={input}
        />
        <button onClick={addTodoItem}>Add</button>
      </div>

      <ul>
        {todoList.map((item) => (
          <li className="p-2" key={item.id}>
            <input type="checkbox" />
            <span>{item.text}</span>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
