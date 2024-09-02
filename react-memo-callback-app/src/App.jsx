import React, { useState, useMemo, useCallback } from 'react';
import ExpensiveCalculation from './ExpensiveCalculation';

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // useMemo to avoid recalculating expensive function when 'count' changes
  const expensiveValue = useMemo(() => {
    console.log('Calculating expensive value...');
    return count * 2;
  }, [count]);

  // useCallback to memoize the function so that it only changes when 'count' changes
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
    setCount((prev) => prev + 1);
  }, [count]);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">useMemo and useCallback Example</h1>
      <p className="mt-4">Count: {count}</p>
      <p className="mt-2">Expensive Value (count * 2): {expensiveValue}</p>
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={handleClick}
      >
        Increment Count
      </button>
      <input
        className="mt-4 p-2 border rounded w-full"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <ExpensiveCalculation />
    </div>
  );
};

export default App;
