import Counter from "./Counter";
import { useState } from "react";
import Info from "./info";
import Average from "./Average";
import "./index.css";
import Info2 from "./Info2";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <h1>Counter</h1>
      <Counter />
      <hr />
      <h1>Info</h1>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      {visible && <Info />}
      <hr />
      <h1>Average</h1>
      <Average />
      <hr />
      <h1>Custom</h1>
      <Info2 />
      <hr />
    </div>
  );
}

export default App;
