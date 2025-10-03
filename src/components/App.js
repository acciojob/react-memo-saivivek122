import React, { useState, useMemo } from "react";
import ReactMemo from "./ReactMemo";
import UseMemo from "./UseMemo";

function App() {
  const [todos, setTodos] = useState(["Sample todo"]);
  const [counter, setCounter] = useState(0);
  const [taskInput, setTaskInput] = useState("");

  const addTodo = () => setTodos([...todos, "New todo"]);

  const addCustomTodo = () => {
    if (taskInput.length > 5) {
      setTodos([...todos, taskInput]);
      setTaskInput("");
    } else {
      alert("Task must be more than 5 characters!");
    }
  };

  const doubledCounter = useMemo(() => counter * 2, [counter]);

  return (
    <div>
      <h1>Task Management App</h1>

      {/* Add Todo button (Cypress expects this exact button) */}
      <button onClick={addTodo}>Add Todo</button>

      {/* Todo list */}
      <ReactMemo todos={todos} />

      {/* Input and Submit for custom task */}
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addCustomTodo}>Submit</button>

      {/* Counter */}
      <div>
        <h2>Counter: {counter}</h2>
        <h3>Doubled: {doubledCounter}</h3>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>

      <UseMemo counter={counter} />
    </div>
  );
}

export default App;
