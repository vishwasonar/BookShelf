import { configureStore } from "@reduxjs/toolkit";
import rootreducers from "./reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
	key: "root",
	storage,
};

const persistedBooksReducer = persistReducer(persistConfig, rootreducers);

export const store = configureStore({
	reducer: persistedBooksReducer,
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
