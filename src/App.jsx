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
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <h3>Step: {step}</h3>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="passi">
        <button onClick={() => setCount((s) => s - step)}>-</button>
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
