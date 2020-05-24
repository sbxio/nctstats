import * as actionTypes from "./activeActionTypes";

export const activeReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.ACTIVATE:
      return action.community_url;

    default:
      return state;
  }
};
