import React from "react";
import {useSelector} from "react-redux";

import {Nectar} from "components/Nectar";
import * as reducers from "constants/reducers";
import * as eventTypes from "store/messages/eventTypes";

export const AssertionBidTotal = props => {
  const total_bid = useSelector(state => state[reducers.messages][props.community][eventTypes.ASSERTION].total_bid);

  return (
    <div style={{textAlign: "right"}}>
      <div style={{fontWeight: 500}}>total rolling amount</div>
      <Nectar amount={total_bid || 0} />
    </div>
  );
};
