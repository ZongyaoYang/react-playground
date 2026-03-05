import { useRef, useState } from "react";

export default function UseRefHookPractice() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>useRef Hook</h1>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>

      <CountRenderTimes />
    </div>
  );
}

function CountRenderTimes() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current++;

  const countPlus = () => {
    setCount((count) => count + 1);
  };

  return (
    <div
      style={{
        borderRadius: "10px",
        border: "1px solid black",
        marginTop: "20px",
      }}
    >
      <h1>Count: {count}</h1>

      <h2>Component rendered: {renderCount.current} times</h2>

      <button onClick={countPlus}>Increment</button>
    </div>
  );
}
