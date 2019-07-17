const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
  STORE_RESULT: "STORE_RESULT",
  DELETE_RESULT: "DELETE_RESULT"
};

export const increment = value => {
  return {
    type: ACTIONS.INCREMENT,
    value
  };
};
export const decrement = value => {
  return {
    type: ACTIONS.DECREMENT,
    value
  };
};
export const add = value => {
  return {
    type: ACTIONS.ADD,
    value
  };
};
export const subtract = value => {
  return {
    type: ACTIONS.SUBTRACT,
    value
  };
};
export default ACTIONS;
