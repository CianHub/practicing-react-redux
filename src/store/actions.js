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

export const saveResult = result => {
  return {
    type: ACTIONS.STORE_RESULT,
    result
  };
};

export const storeResult = result => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(saveResult(result));
      console.log(getState());
    }, 2000);
  };
};

export const deleteResult = id => {
  return {
    type: ACTIONS.DELETE_RESULT,
    id
  };
};
export default ACTIONS;
