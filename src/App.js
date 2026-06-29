import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [dateCount, setDateCount] = useState(0);

  const today = new Date();
  const newDate = new Date();
  newDate.setDate(today.getDate() + dateCount);

  function subtractStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  function addStep() {
    setStep((s) => s + 1);
  }

  function substractCount() {
    setDateCount((c) => c - step);
  }

  function addDateCount() {
    setDateCount((s) => s + step);
  }

  return (
    <div className="counter">
      <div>
        <input type="range" min="0" max="10"></input>
        <div className="step-counter">
          <button onClick={subtractStep}>-</button>
          <p>Step: {step}</p>
          <button onClick={addStep}>+</button>
        </div>
      </div>

      <div>
        <div className="step-counter">
          <button onClick={substractCount}>-</button>
          <p>Count: {dateCount}</p>
          <button onClick={addDateCount}>+</button>
        </div>
      </div>

      <div className="date-message">
        <p>
          <span>
            {dateCount === 0
              ? "Today is "
              : dateCount === 1
                ? `${dateCount} day from today is `
                : dateCount > 1
                  ? `${dateCount} days from today is `
                  : dateCount === -1
                    ? `${Math.abs(dateCount)} day ago was `
                    : `${Math.abs(dateCount)} days ago was `}
          </span>
          <span>{newDate.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}
