import React, { useEffect } from "react";

const CbRefDemo: React.FC = () => {
  let cbRef: HTMLInputElement;

  const setCbRef = (element: HTMLInputElement) => {
    cbRef = element;
  };

  useEffect(() => {
    cbRef.focus();
  });

  return (
    <div>
      <input type="text" ref={setCbRef} />
    </div>
  );
};

export default CbRefDemo;
