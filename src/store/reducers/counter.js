import ACTIONS, { increment } from "../actions";
import { updateObject } from "../utility";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  if (action.type === ACTIONS.INCREMENT) {
    return updateObject(state, { counter: state.counter + action.value });
  }
  if (action.type === ACTIONS.DECREMENT) {
    return updateObject(state, { counter: state.counter - action.value });
  }
  if (action.type === ACTIONS.ADD) {
    return updateObject(state, { counter: state.counter + action.value });
  }
  if (action.type === ACTIONS.SUBTRACT) {
    return updateObject(state, { counter: state.counter - action.value });
  }

  return state;
};

export default reducer;
