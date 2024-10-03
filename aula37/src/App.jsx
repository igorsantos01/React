import { useRef } from "react";
import { useState } from "react";
import RefExample from "./RefExample";

const App = () => {
  let variable = 0;
  const [state, setState] = useState(0);
  const ref = useRef(0);

  const showValues = () => {
    alert(`
      Variável: ${variable}
      State: ${state}
      Ref: ${ref.current}
    `);
  };

  return (
    <div>
      <RefExample />
      <hr />
      <h2>Conhecendo as ref</h2>
      <p>Variável: {variable}</p>
      <p>State: {state}</p>
      <p>Ref: {ref.current}</p>
      <button onClick={() => variable++}>Aumentar Variável</button>
      <button onClick={() => setState((state) => state + 1)}>
        Aumentar State
      </button>
      <button onClick={() => ref.current++}>Aumentar Ref</button>
      <button onClick={showValues}>Exibir valores</button>
    </div>
  );
};

export default App;
