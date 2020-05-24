import React from "react";
import {useSelector} from "react-redux";

import * as reducers from "constants/reducers";
import * as eventTypes from "store/messages/eventTypes";

export const BountyCount = props => {
  const count = useSelector(state => state[reducers.messages][props.community][eventTypes.BOUNTY].count);

  return (
    <div>
      <div style={{fontWeight: 500}}>rolling count</div>
      <div>{count}</div>
    </div>
  );
};
