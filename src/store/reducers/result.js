import ACTIONS from "../actions";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  if (action.type === ACTIONS.STORE_RESULT) {
    return {
      ...state,
      results: state.results.concat({
        id: new Date(),
        value: action.result
      })
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
