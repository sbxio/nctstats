import {combineReducers} from "redux";

import {communityReducer} from "./community/communityReducer";
import {messagesReducer} from "./messages/messagesReducer";

const _reducer = combineReducers({
  community: communityReducer,
  messages: messagesReducer,
});

export const reducer = (state, action) => {
  return _reducer(state, action);
};
