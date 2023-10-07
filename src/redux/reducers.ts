import { combineReducers } from "@reduxjs/toolkit";
import { SignupReducer } from "./slices/AuthSlice";
const rootreducers = combineReducers({
	SignupReducer,
});

export default rootreducers;
