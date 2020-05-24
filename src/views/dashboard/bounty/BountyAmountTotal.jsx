import React from "react";
import {useSelector} from "react-redux";

import {Nectar} from "components/Nectar";
import * as reducers from "constants/reducers";
import * as eventTypes from "store/messages/eventTypes";

export const BountyAmountTotal = props => {
  const total_amount = useSelector(state => state[reducers.messages][props.community][eventTypes.BOUNTY].total_amount);

  return (
    <div>
      <div>total amount</div>
      <div>
        <Nectar amount={total_amount || 0} />
      </div>
    </div>
  );
};
