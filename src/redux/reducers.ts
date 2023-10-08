import { combineReducers } from "@reduxjs/toolkit";
import { SignupReducer } from "./slices/AuthSlice";
import { BookSliceReducer } from "./slices/BookSlice";
import { CustomBookReducer } from "./slices/CustomBookSlice";

const rootreducers = combineReducers({
	SignupReducer,
	BookSliceReducer,
	CustomBookReducer
});

export default rootreducers;
