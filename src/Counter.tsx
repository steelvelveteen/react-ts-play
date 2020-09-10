import React, { Component } from "react";

interface Props {
  //   another: string;
}
interface State {
  count: number;
}

class Counter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("Callback value", this.state.count);
    });
  };

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
