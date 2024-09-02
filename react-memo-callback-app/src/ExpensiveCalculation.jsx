import React, { useMemo } from 'react';

const ExpensiveCalculation = () => {
  const result = useMemo(() => {
    console.log('Running expensive calculation...');
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    return total;
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Expensive Calculation Result:</h2>
      <p>{result}</p>
    </div>
  );
};

export default ExpensiveCalculation;
