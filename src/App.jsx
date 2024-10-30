/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  //state
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  //variables
  const date = new Date("october 29 2024");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div className="passi">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div className="passi">
        <button onClick={() => setCount((s) => s - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <h3>Count: {count}</h3>
        <button onClick={() => setCount((s) => s + step)}>+</button>
      </div>
      <span>
        {count === 0
          ? "Oggi è  "
          : count > 0
          ? ` frà ${count} giorni sarà  `
          : `${Math.abs(count)} giorni fà era `}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  );
}

export default App;
