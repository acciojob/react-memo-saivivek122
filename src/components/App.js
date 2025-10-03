import React, { useState, useMemo } from "react";
import ReactMemo from "./ReactMemo";
import UseMemo from "./UseMemo";
 
function App() {
  const [todos, setTodos] = useState(["Sample todo"]);
  const [counter, setCounter] = useState(0);
  const [taskInput, setTaskInput] = useState("");

  // Function to add default todo
  const addTodo = () => setTodos([...todos, "New todo"]);

  // Function to add custom task
  const addCustomTodo = () => {
    if (taskInput.length > 5) {
      setTodos([...todos, taskInput]);
      setTaskInput("");
    } else {
      alert("Task must be more than 5 characters!");
    }
  };

  // Expensive calculation example
  const doubledCounter = useMemo(() => {
    console.log("Calculating doubled counter...");
    return counter * 2;
  }, [counter]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Management App</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <ReactMemo todos={todos} />
      
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter custom task"
        />
        <button onClick={addCustomTodo}>Submit</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Counter: {counter}</h2>
        <h3>Doubled (useMemo): {doubledCounter}</h3>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>

      <UseMemo counter={counter} />
    </div>
  );
}

export default App;
