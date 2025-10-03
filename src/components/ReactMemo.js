import React from "react";

// React.memo prevents re-render if props don't change
const TaskList = React.memo(({ todos }) => {
  console.log("TaskList rendered");
  return (
    <div>
      <h2>Todos:</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
});

export default TaskList;
