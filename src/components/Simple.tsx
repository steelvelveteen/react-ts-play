import React from "react";

interface IProps {
  data_one: string;
  data_two: string;
}

// const Hello = (props: { data_one: string }) => {
const Hello = (props: IProps) => {
  return (
    <div>
      <h3>Data prop 1: {props.data_one}</h3>
    </div>
  );
};
export default Hello;
