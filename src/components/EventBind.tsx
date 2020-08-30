import React, { Component } from "react";

interface IProps {
  message: string;
}
interface IState {
  message: string;
}
// First of all "this" keyword points the Parent element on which it is called . So when you use a Named function with the "this" keyword inside it  , it isn't binded to anything at all ..So the control passes to the "Window" element . So the Window element acts as a parent to the Named function . We see "Undefined" here because we use "Strict mode " in Javascript . What Strict Mode does is, if there is a named function( without any Bind method ) it transfers control to the parent element(window element) as i said ..this action is blocked by the strict mode ..So you see "undefined" in there ...However if you take off the strict mode ,you should see it will return the Window object ... The One Stop Solution to all of this is using arrow functions which takes parent element as the Class and not the window object .
class EventBind extends Component<IState> {
  state = {
    message: "Hello",
  };

  clickHandler() {
    // clickHandler = (): void => {
    // console.log(this);
    this.setState({
      message: "Good Bye",
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler}>Click</button> */}
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    );
  }
}

export default EventBind;
