import React from "react";
import {useSelector} from "react-redux";

import {Nectar} from "components/Nectar";
import * as eventTypes from "store/messages/eventTypes";

const community_id = "wss://nu.k.polyswarm.network/v1/events/?chain=side";

export const SettledPayoutTotal = props => {
  const total_payout = useSelector(state => state.messages[community_id][eventTypes.SETTLED].total_bid);

  return (
    <div>
      <div>total payout</div>
      <div>
        <Nectar amount={total_payout || 0} />
      </div>
    </div>
  );
};
