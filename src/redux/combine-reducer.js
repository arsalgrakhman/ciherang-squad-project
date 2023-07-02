import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import sticky from "./sticky/reducer";

const persisConfiguration = {
  key: "root",
  storage,
};

const combineReducer = combineReducers({ sticky });
const persistedReducer = persistReducer(persisConfiguration, combineReducer);
export default persistedReducer;
