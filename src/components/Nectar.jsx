import React from "react";

export const Nectar = props => {
  let amount = props.amount.toFixed(8);
  let [integer, decimal] = amount.split(".");

  return (
    <span>
      <span>{integer}</span>
      <span style={{opacity: 0.64}}>
        <span>.</span>
        <span>{decimal}</span>
      </span>
      <span>NCT</span>
    </span>
  );
};
