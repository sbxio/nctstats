import produce from "immer";

import * as actionTypes from "./communityActionTypes";

export const communityReducer = (state = {}, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.COMMUNITY_CONNECT:
        draft[action.community_url] = {
          community_name: action.community_name,
          community_url: action.community_url,
          connection: {
            initiated: Date.now(),
            succeded: null,
            closed: null,
            errors: [],
          },
          messages: {
            last: null,
            last_error: null,
          },
        };
        return;

      case actionTypes.COMMUNITY_CONNECT__SUCCEEDED:
        draft[action.community_url].connection.succeded = Date.now();
        return;

      case actionTypes.COMMUNITY_CONNECTION__CLOSED:
        draft[action.community_url].connection.closed = Date.now();
        return;

      case actionTypes.COMMUNITY_CONNECTION__ERROR:
        draft[action.community_url].connection.errors.push({
          timestamp: Date.now(),
          event: action.event,
        });
        return;

      case actionTypes.COMMUNITY_CONNECTION_MESSAGE:
        draft[action.community_url].messages.last = {
          timestamp: Date.now(),
          event: action.event,
        };
        return;

      case actionTypes.COMMUNITY_CONNECTION_MESSAGE__SUCCEEDED:
        return;

      case actionTypes.COMMUNITY_CONNECTION_MESSAGE__FAILED:
        draft[action.community_url].messages.last_error = {
          timestamp: Date.now(),
          err: action.err,
        };
        return;

      default:
        return;
    }
  });
