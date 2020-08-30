import React, { Component } from "react";

interface IProps {
  message: string;
}
interface IState {
  message: string;
}
class EventBind extends Component<IState> {
  state = {
    message: "Hello",
  };

  clickHandler(): void {
    this.setState({
      message: "Good Bye",
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    );
  }
}

export default EventBind;
