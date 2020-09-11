import React, { useEffect } from "react";

const RefDemo: React.FC = () => {
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  useEffect(() => {
    console.log(inputRef);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const clickHandler = () => {
    if (inputRef.current) {
      alert(inputRef.current.value ? inputRef.current.value : "Nothing");
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => clickHandler()}>Log input</button>
    </div>
  );
};
export default RefDemo;
