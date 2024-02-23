/* eslint-disable no-unused-vars */
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex shrink-0 px-10 m-10 gap-5 rounded-xl max-w-md justify-center items-center bg-gray-200 p-10">
      <button
        onClick={() => setCount((prev) => prev - 1)}
        className="bg-red-300 py-2 px-5 rounded-md"
      >
        Decrement
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-emerald-300 py-2 px-5 rounded-md"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
