import React from "react";
import "./App.css";
import Welcome from "../src/components/Welcome";
import Simple from "../src/components/Simple";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome welcomeMsg="Wilkommen!" title="Herr" name="Bruce" />
        <Simple data_one="Prop ONE" data_two="Prop TWO" />
      </header>
    </div>
  );
}

export default App;
