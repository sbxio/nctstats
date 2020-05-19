import React from "react";
import {useSelector} from "react-redux";

import {Nectar} from "components/Nectar";
import * as eventTypes from "store/messages/eventTypes";

const community_id = "wss://rho.k.polyswarm.network/v1/events/?chain=side";

export const AssertionBidTotal = props => {
  const total_bid = useSelector(state => state.messages[community_id][eventTypes.ASSERTION].total_bid);

  return (
    <div>
      <div>total bid</div>
      <div>
        <Nectar amount={total_bid || 0} />
      </div>
    </div>
  );
};
