import useCreatePassword from "./hooks/useCreatePassword.js";
import useCopy from "./hooks/useCopy.js";
import "./App.css";
import { useState } from "react";
import Input from "./components/Input/index.jsx";
const App = () => {
  const [passwordSize, setPasswordSize] = useState(12);
  const { createdPass, newPassword } = useCreatePassword(passwordSize);
  const { copy, copyPass } = useCopy(createdPass);
  const [showInput, setShowInput] = useState(false);
  return (
    <>
      <h1>Gerador de Senhas</h1>
      <div>
        <label htmlFor="custom-size">Customizar tamanho:</label>
        <input
          type="checkbox"
          id="custom-size"
          value={showInput}
          onChange={() => setShowInput((showInput) => !showInput)}
        />
      </div>
      {showInput ? (
        <div>
          <label htmlFor="passwordSize">Tamanho da senha:</label>
          <Input
            passwordSize={passwordSize}
            setPasswordSize={setPasswordSize}
          />
        </div>
      ) : null}

      <button onClick={newPassword}>
        Gerar senha de {showInput ? passwordSize : 8} caracteres
      </button>
      <button onClick={copyPass}>{copy}</button>
      <div>{createdPass}</div>
    </>
  );
};
export default App;
