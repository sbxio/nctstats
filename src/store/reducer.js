import {combineReducers} from "redux";

import * as reducers from "constants/reducers";

import {activeReducer} from "./active/activeReducer";
import {communityReducer} from "./community/communityReducer";
import {messagesReducer} from "./messages/messagesReducer";

const _reducer = combineReducers({
  [reducers.active]: activeReducer,
  [reducers.community]: communityReducer,
  [reducers.messages]: messagesReducer,
});

export const reducer = (state, action) => {
  return _reducer(state, action);
};
