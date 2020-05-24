import React from "react";
import {useDispatch} from "react-redux";

import * as activeActions from "store/active/activeActions";
import * as communityActions from "store/community/communityActions";
import * as communities from "constants/communities";

import {Dashboard} from "../dashboard/Dashboard";

export const Front = props => {
  const dispatch = useDispatch();
  dispatch(activeActions.activate(communities.rho.uri));
  dispatch(communityActions.registerCommunityAction(communities.rho.uri));

  return <Dashboard />;
};
