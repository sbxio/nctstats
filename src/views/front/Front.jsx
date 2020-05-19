import React from "react";
import {useDispatch} from "react-redux";

import * as actions from "store/community/communityActions";
import * as communities from "constants/communities";

import {Dashboard} from "../dashboard/Dashboard";

export const Front = props => {
  const dispatch = useDispatch();
  dispatch(actions.registerCommunityAction(communities.rho.uri));

  return <Dashboard />;
};
