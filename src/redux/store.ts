import { configureStore } from "@reduxjs/toolkit";
import rootreducers from "./reducers";

const store = configureStore({
	reducer: rootreducers,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
