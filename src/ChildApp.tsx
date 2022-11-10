import { useState } from 'react';
import './App.css';

export default function ChildApp() {
  const [count, setCount] = useState(0);



  return (
    <div className="ChildApp">
      <main>
        <p>2nd Component</p>
        <p>Count: {count}</p>
        <button onClick={plusButton()}>+</button>
        <button onClick={minusButton()}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </main>
    </div>
  );

  function plusButton() {
    if (count >= 0) {
      return () => setCount(count + 1);
    }
  }

  function minusButton() {
    if (count > 0) {
      return () => setCount(count - 1);
    }
  }
}
