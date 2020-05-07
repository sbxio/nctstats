import React from "react";
import {useDispatch} from "react-redux";

import * as actions from "store/community/communityActions";

import {Dashboard} from "../dashboard/Dashboard";

export const Front = props => {
  const dispatch = useDispatch();
  dispatch(actions.registerCommunityAction("", "wss://nu.k.polyswarm.network/v1/events/?chain=side"));

  return <Dashboard />;
};
