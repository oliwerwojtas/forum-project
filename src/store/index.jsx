import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };
const initialAuth = { user: null, authIsReady: false };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    login(state) {
      state.user;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  reducers: {
    login(state) {
      return { ...state, user: action.payload };
    },
    logout(state) {
      return { ...state, user: null };
    },
    signup() {},
    authIsReady(state) {
      return { user: action.payload, authIsReady: true };
    },
  },
});

const store = configureStore({
  //   reducer: counterSlice.reducer,
  reducer: authSlice.reducer,
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
