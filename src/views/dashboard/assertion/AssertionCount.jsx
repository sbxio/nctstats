import React from "react";
import {useSelector} from "react-redux";

import * as eventTypes from "store/messages/eventTypes";

const community_id = "wss://nu.k.polyswarm.network/v1/events/?chain=side";

export const AssertionCount = props => {
  const count = useSelector(state => state.messages[community_id][eventTypes.ASSERTION].count);

  return (
    <div>
      <div>count</div>
      <div>{count}</div>
    </div>
  );
};
