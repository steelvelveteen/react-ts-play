import React, { Component } from "react";

class ClassClick extends Component {
  render() {
    return (
      <div>
        <button onClick={this.classClickHandler}>
          Click from class for event
        </button>
      </div>
    );
  }

  private classClickHandler = () => {
    console.log("This comes from a method in a class component");
  };
}

export default ClassClick;
