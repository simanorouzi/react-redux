import * as React from 'react';
import * as Redux from 'react-redux';

class classbaseCounter extends React.Component {
  IncrementHandler() {
    this.props.increment();
  }
  DecrementHandler() {
    this.props.decrement();
  }

  render() {
    return (
      <React.Fragment>
        <p>{this.props.counter}</p>
        <button onClick={this.IncrementHandler.bind(this)}>Increment</button>
        <button onClick={this.DecrementHandler.bind(this)}>Decrement</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { counter: state.counter };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'Increment' }),
    decrement: () => dispatch({ type: 'Decrement' }),
  };
};

export default Redux.connect(
  mapStateToProps,
  mapDispatchToProps
)(classbaseCounter);
