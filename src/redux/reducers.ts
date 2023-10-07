import { combineReducers } from "@reduxjs/toolkit";
import { SignupReducer } from "./slices/AuthSlice";
import { BookSliceReducer } from "./slices/BookSlice";
const rootreducers = combineReducers({
	SignupReducer,
	BookSliceReducer,
});

export default rootreducers;
