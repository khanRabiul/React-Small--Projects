import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }
    const handleReset =() => {
        setCount(0)
    }

  return (
    <main className="h-screen flex items-center justify-center text-2xl bg-[#07e9d7c2] text-gray-800">
      <div>
        <div className="text-center text-5xl font-bold mb-5">
          <h1 className="">Counter:</h1>
          <h2>{count}</h2>
        </div>
        <div className="space-x-5">
          <button 
          className="bg-blue-500 px-3 py-2 rounded-md text-white"
          onClick={handleIncrement}
          >Increment</button>
          <button 
          className="bg-red-500 px-3 py-2 rounded-md text-white"
          onClick={handleReset}
          >Reset</button>
          <button 
          className="bg-blue-500 px-3 py-2 rounded-md text-white"
          onClick={handleDecrement}
          >Decrement</button>
        </div>
      </div>
    </main>
  );
};

export default Counter;
