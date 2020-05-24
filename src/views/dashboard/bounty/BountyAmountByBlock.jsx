import React from "react";

import {SvgBarChart} from "components/charting/SvgBarChart";
import {Nectar} from "components/Nectar";
import {getAverage} from "functions/getAverage";
import {useMessageGroupBy} from "hooks/useMessageGroupBy";
import * as eventTypes from "store/messages/eventTypes";

const community_id = "wss://rho.k.polyswarm.network/v1/events/?chain=side";
const max_no_of_data_points = 20;

export const BountyAmountByBlock = props => {
  const data = useMessageGroupBy(community_id, eventTypes.BOUNTY, max_no_of_data_points, "block_number", "amount");

  const H = data.length ? Math.max(...data.map(d => d.h)) : 0;
  const avg = getAverage(data, "h");

  return (
    <div>
      <div style={{height: "10em"}}>
        <SvgBarChart
          data={data}
          maxNoOfDataPoints={max_no_of_data_points}
          H={H}
          avg={avg}
          avgLineStrokeWidth={(H * 2) / 120}
        />
      </div>
      <div>
        average per block <Nectar amount={avg} />
      </div>
    </div>
  );
};
