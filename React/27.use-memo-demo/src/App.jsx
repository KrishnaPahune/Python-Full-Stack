import React, { useMemo, useState, useCallback } from "react";

function App() {
  console.log("App Component Rendered");

  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((prev) => prev + 1);
  }

  function addTodo() {
    setTodos((prevTodos) => [...prevTodos, "New Todo"]);
  }

  // ---------------------------
  // Using useCallback
  // ---------------------------
  const timeConsumingFunction = useCallback((n) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      n = n + 1;
    }
    return n;
  }, []);
  // empty dependency → function reference never changes


  // ---------------------------
  // Using useMemo
  // ---------------------------
  const memoizedValue = useMemo(() => {
    return timeConsumingFunction(count);
  }, [count, timeConsumingFunction]);

  return (
    <div>
      <h1>useMemo + useCallback</h1>

      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}

      <hr />

      <h2>Count: {count}</h2>
      <button onClick={incrementCount}>Increment Count</button>

      <p>Value returned by time consuming function: {memoizedValue}</p>
    </div>
  );
}

export default App;
