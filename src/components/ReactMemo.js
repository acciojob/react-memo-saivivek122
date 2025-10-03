import React from "react";

// React.memo prevents re-render if props don't change
const ReactMemo = React.memo(({ todos }) => {
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

export default ReactMemo;
