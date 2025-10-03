import React, { useMemo } from "react";

const UseMemo = ({ counter }) => {
  // Simulate expensive calculation
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    const computeFactorial = (n) => {
      return n <= 1 ? 1 : n * computeFactorial(n - 1);
    };
    return computeFactorial(counter);
  }, [counter]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Factorial of counter: {factorial}</h3>
    </div>
  );
};

export default UseMemo;
