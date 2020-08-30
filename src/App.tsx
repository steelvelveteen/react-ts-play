import React from "react";
import "./App.css";
import EventBind from "../src/components/EventBind";
import Welcome from "../src/components/Welcome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EventBind message="bla bla" />
        <Welcome welcomeMsg="one" title="two" name="three" />
      </header>
    </div>
  );
}

export default App;
