import * as Redux from 'redux';

export type stateType = {
  counter: number;
};
const counterReducer = (state: stateType = { counter: 0 }, action) => {
  if (action.type === 'Increment') {
    return { counter: state.counter + 1 };
  }
  if (action.type === 'Decrement') {
    return { counter: state.counter - 1 };
  }
  return state;
};
const store = Redux.createStore(counterReducer);

export default store;
