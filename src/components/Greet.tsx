import React from "react";

interface IGreet {
  message: string;
}
const Greet: React.FC<IGreet> = (props: IGreet) => {
  return <h1>{props.message}</h1>;
};

export default Greet;
