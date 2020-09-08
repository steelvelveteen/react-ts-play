import React, { Component } from "react";

interface Props {
  count: number;
}

class Counter extends Component<State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
      </div>
    );
  }
}

export default Counter;
