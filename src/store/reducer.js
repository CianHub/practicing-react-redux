import ACTIONS from "./actions";

const initialState = {
  counter: 0,
  results: []
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
  if (action.type === ACTIONS.STORE_RESULT) {
    return {
      ...state,
      results: state.results.concat({ id: new Date(), value: state.counter })
    };
  }
  if (action.type === ACTIONS.DELETE_RESULT) {
    return {
      ...state,
      results: this.state.results.filter(item => action.id !== item.id)
    };
  }

  return state;
};

export default reducer;
