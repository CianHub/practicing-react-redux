import ACTIONS from "../actions";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  if (action.type === ACTIONS.INCREMENT) {
    return { ...state, counter: state.counter + action.value };
  }
  if (action.type === ACTIONS.DECREMENT) {
    return { ...state, counter: state.counter - action.value };
  }
  if (action.type === ACTIONS.ADD) {
    return { ...state, counter: state.counter + action.value };
  }
  if (action.type === ACTIONS.SUBTRACT) {
    return { ...state, counter: state.counter - action.value };
  }

  return state;
};

export default reducer;
