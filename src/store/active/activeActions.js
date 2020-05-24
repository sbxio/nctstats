import * as actionTypes from "./activeActionTypes";

export const activate = community_url => {
  return {
    type: actionTypes.ACTIVATE,
    community_url,
  };
};
