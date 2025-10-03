import React, { useMemo } from "react";

const UseMemo = ({ counter }) => {
  const factorial = useMemo(() => {
    const computeFactorial = (n) => (n <= 1 ? 1 : n * computeFactorial(n - 1));
    return computeFactorial(counter);
  }, [counter]);

  return (
    <div>
      <h3>Factorial of counter: {factorial}</h3>
    </div>
  );
};

export default UseMemo;
