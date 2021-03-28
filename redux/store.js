import { createStore } from "redux";
import { persistCombineReducers } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

import constants from "./reducers/constants";

const persist_config = {
  key: "root",
  storage: AsyncStorage,
};

export default createStore(
  persistCombineReducers(persist_config, {
    constants,
  })
);
