import React, { useState } from "react";
import "./app.css";

function App () {
   const [count, setCount] = useState(0); //interacts with react 

  return (
    <div className="container">
      <div className="counter-box">
        <h1>Counter App</h1>

        <h2>{count}</h2>

        <div className="buttons">
          <button className="plus" onClick={() => setCount(count + 1)}>
            +
          </button>

          <button className="minus" onClick={() => setCount(count - 1)}>
            -
          </button>

          <button className="reset" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;