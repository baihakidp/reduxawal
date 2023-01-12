import { useState } from "react";
import { useSelector } from "react-redux";
import reactLogo from "./assets/react.svg";
import Result from "./components/result";
// import './App.css'

function App() {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum((count) => count + 1);
  };
  const decrease = () => {
    setNum((count) => count - 1);
  };
  return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <h1>{num}</h1>
      <Result />
    </div>
  );
}

export default App;
