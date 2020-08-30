import React from "react";

function FunctionClick() {
  // const clickHandler = () => {
  //   console.log("Button has been clicked");
  // };

  return (
    <div>
      <button onClick={clickHandler}>Click for an event</button>
      <button onClick={() => clickHandler()}>Click for another event</button>
      <button
        onClick={() => {
          console.log("In body defined anonymous function!");
        }}
      >
        Click for another event
      </button>
    </div>
  );
}

const clickHandler = () => {
  console.log("Button has been clicked");
};

export default FunctionClick;
