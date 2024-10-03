import { useRef } from "react";

const RefExample = () => {
  const InputRef = useRef(null);
  const handleClick = () => {
    InputRef.current.focus();
  };
  return (
    <div>
      <input ref={InputRef} type="text" />
      <button onClick={handleClick}>Focar no Input</button>
    </div>
  );
};

export default RefExample;
