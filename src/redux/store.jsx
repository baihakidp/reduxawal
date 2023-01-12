import React from "react";
import { createStore } from "redux";

const counterState = {
  total: 20,
};

const counterStateReducer = (state = counterState) => {
  return state;
};

const store = createStore(counterStateReducer);

export default store;
