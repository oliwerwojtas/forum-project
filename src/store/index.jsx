import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useDispatch } from "react-redux";

const initialAuth = { user: null, authIsReady: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  reducers: {
    login(state, action) {
      return { ...state, user: action.payload };
    },
    logout(state) {
      return { ...state, user: null };
    },
    authIsReady(state, action) {
      return { user: action.payload, authIsReady: true };
    },
  },
});

const store = configureStore({
  //   reducer: counterSlice.reducer,
  reducer: authSlice.reducer,
});

export const authActions = authSlice.actions;
// useEffect(() => {
//   const unsub = projectAuth.onAuthStateChanged((user) => {
//     dispatch(authActions.authIsReady({ payload: user }));
//     unsub();
//   });
// });

const initialState = { counter: 0, showCounter: true };
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
export const counterActions = counterSlice.actions;
export default store;
