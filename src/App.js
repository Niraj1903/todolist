import { useState } from "react";
import "./App.css";

function App() {
  const targetValue = (e) => {
    setInput(e.target.value);
  };

  const [input, setInput] = useState("");
  console.log(input);
  return (
    <div className="App">
      <input
        value={input}
        type="text"
        placeholder="Enter the list"
        onChange={targetValue}
      />
    </div>
  );
}

export default App;
