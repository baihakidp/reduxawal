import React from "react";
import { useSelector } from "react-redux";

const result = () => {
  const { state } = useSelector((counterState) => counterState);
  return (
    <div>
      <h1>hasil</h1>
      <h3>{state}</h3>
    </div>
  );
};

export default result;
