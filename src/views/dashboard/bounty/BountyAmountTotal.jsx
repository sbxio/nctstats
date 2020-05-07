import React from "react";
import {useSelector} from "react-redux";

import {Nectar} from "components/Nectar";
import * as eventTypes from "store/messages/eventTypes";

const community_id = "wss://nu.k.polyswarm.network/v1/events/?chain=side";

export const BountyAmountTotal = props => {
  const total_amount = useSelector(state => state.messages[community_id][eventTypes.BOUNTY].total_amount);

  return (
    <div>
      <div>total amount</div>
      <div>
        <Nectar amount={total_amount || 0} />
      </div>
    </div>
  );
};
