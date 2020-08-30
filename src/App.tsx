import React from "react";
import "./App.css";
import EventBind from "../src/components/EventBind";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EventBind message="bla bla" />
      </header>
    </div>
  );
}

export default App;
