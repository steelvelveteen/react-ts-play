import React from "react";

interface IWelcome {
  welcomeMsg: string;
  title: string;
  name: string;
}

class Welcome extends React.Component<IWelcome> {
  render() {
    return (
      <h1>
        {this.props.welcomeMsg} {this.props.title} {this.props.name}
      </h1>
    );
  }
}

export default Welcome;
