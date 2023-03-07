import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateType } from '../src/reduxCounter';

const counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector<stateType, number>((state) => state.counter);

  const IncrementHandler = () => {
    dispatch({ type: 'Increment' });
  };

  const DecrementHandler = () => {
    dispatch({ type: 'Decrement' });
  };

  return (
    <React.Fragment>
      <p>{counter}</p>
      <button onClick={IncrementHandler}>Increment</button>
      <button onClick={DecrementHandler}>Decrement</button>
    </React.Fragment>
  );
};

export default counter;
