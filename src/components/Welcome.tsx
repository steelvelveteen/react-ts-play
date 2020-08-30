import React from "react";

interface IWelcome {
  welcomeMsg: string;
  title: string;
  name: string;
}

interface IState {
  welcomeMsg: string;
  title: string;
  name: string;
}

class Welcome extends React.Component<IWelcome, IState> {
  state: IState = {
    welcomeMsg: this.props.welcomeMsg,
    title: this.props.title,
    name: this.props.name,
  };
  // constructor(props: IWelcome) {
  //   super(props);
  //   this.state = {
  //     welcomeMsg: this.props.welcomeMsg,
  //     title: this.props.title,
  //     name: this.props.name,
  //   };
  // }
  changeState = (): void => {
    this.setState({
      welcomeMsg: "Bienvenido a casa",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.welcomeMsg}</h1>
        <h1>
          {this.state.title} {this.state.name}
        </h1>
        <button onClick={() => this.changeState()}>
          Change Welcome Message
        </button>
      </div>
    );
  }
}

export default Welcome;
