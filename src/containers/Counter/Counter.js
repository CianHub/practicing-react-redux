import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import ACTIONS from "../../store/actions";

class Counter extends Component {
  state = {
    counter: 0,
    results: []
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map(result => (
            <li
              key={result.id}
              onClick={() => this.props.onDeleteResult(result.id)}
            >
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter.counter,
    storedResults: state.results.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: ACTIONS.INCREMENT, value: 1 }),
    onDecrementCounter: () => dispatch({ type: ACTIONS.DECREMENT, value: 1 }),
    onAddCounter: () => dispatch({ type: ACTIONS.ADD, value: 5 }),
    onSubtractCounter: () => dispatch({ type: ACTIONS.SUBTRACT, value: 5 }),
    onStoreResult: result =>
      dispatch({
        type: ACTIONS.STORE_RESULT,
        result
      }),
    onDeleteResult: id => dispatch({ type: ACTIONS.DELETE_RESULT, id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
