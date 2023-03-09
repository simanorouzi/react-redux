import * as Redux from 'redux';
import * as ReduxToolkit from '@reduxjs/toolkit';

export type counterStateType = {
  counterValue: number;
};
const initialCounter: counterStateType = { counterValue: 0 };
// const counterReducer = (state: stateType = { counter: 0 }, action) => {
//   if (action.type === 'Increment') {
//     return { counter: state.counter + 1 };
//   }
//   if (action.type === 'Decrement') {
//     return { counter: state.counter - 1 };
//   }
//   return state;
// };
// const store = Redux.createStore(counterReducer);

const counterSlice = ReduxToolkit.createSlice({
  name: 'counter',
  initialState: initialCounter,
  reducers: {
    increment(state: counterStateType) {
      state.counterValue++;
    },
    decrement(state: counterStateType) {
      state.counterValue--;
    },
    increase(state: counterStateType, action) {
      state.counterValue = state.counterValue + action.payload;
    },
  },
});
const store = ReduxToolkit.configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
