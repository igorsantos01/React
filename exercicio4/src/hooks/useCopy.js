import { useState, useEffect } from "react";

const useCopy = (createdPass) => {
  const [copy, setCopy] = useState("Copiar");
  useEffect(() => {
    setCopy("Copiar");
  }, [createdPass]);
  function copyPass() {
    navigator.clipboard.writeText(createdPass);
    setCopy("Copiado!");
  }
  return { copy, copyPass };
};
export default useCopy;
