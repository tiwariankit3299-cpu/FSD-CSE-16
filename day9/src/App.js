import './App.css';

const App = () => {
  const decrement = () => {
    console.log("decrement clicked");
  };

  const increment = () => {
    console.log("increment clicked");
  };

  const reset = () => {
    console.log("reset clicked");
  };

  return (
    <div>
      <h1>Counter App</h1>

      <div></div>

      <button onClick={decrement}>-</button>

      <button onClick={reset}>RESET</button>

      <button onClick={increment}>+</button>
    </div>
  );
};

export default App;
