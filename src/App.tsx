import React from "react";
import "./App.css";
import FunctionClick from "../src/components/FunctionClick";
import ClassClick from "../src/components/ClassClick";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FunctionClick />
        <ClassClick />
      </header>
    </div>
  );
}

export default App;
