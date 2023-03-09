import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions, counterStateType } from '../src/reduxCounter';

const counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector<counterStateType, number>(
    (state) => state.counterValue
  );

  const IncrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const DecrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const IncreaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  return (
    <React.Fragment>
      <p>{counter}</p>
      <button onClick={IncrementHandler}>Increment</button>
      <button onClick={DecrementHandler}>Decrement</button>
      <button onClick={IncreaseHandler}>Increase</button>
    </React.Fragment>
  );
};

export default counter;
