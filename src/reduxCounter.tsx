import * as Redux from 'redux';
import * as ReduxToolkit from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export type StoreType = {
  counter: counterStateType;
  athentication: athenticationStateType;
};

export type counterStateType = {
  counterValue: number;
};

export type athenticationStateType = {
  isAthenticated: boolean;
};

const initialCounter: counterStateType = { counterValue: 0 };
const initialAthentication: athenticationStateType = { isAthenticated: false };

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

const athenticationSlice = ReduxToolkit.createSlice({
  name: 'athentication',
  initialState: initialAthentication,
  reducers: {
    logIn(state: athenticationStateType) {
      state.isAthenticated = true;
    },
    logOut(state: athenticationStateType) {
      state.isAthenticated = false;
    },
  },
});

const store = ReduxToolkit.configureStore({
  reducer: {
    counter: counterSlice.reducer,
    athentication: athenticationSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const athenticationActions = athenticationSlice.actions;
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;

export default store;
