import React from "react";
import "./App.css";
import Greet from "../src/components/Greet";
import Welcome from "../src/components/Welcome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet message="Hello" />
        <Welcome welcomeMsg="Welcome back" title="Mr." name="Joey" />
      </header>
    </div>
  );
}

export default App;
