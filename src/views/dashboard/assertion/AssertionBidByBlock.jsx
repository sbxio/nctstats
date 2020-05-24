import React from "react";

import {SvgBarChart} from "components/charting/SvgBarChart";
import {Nectar} from "components/Nectar";

import {getAverage} from "functions/getAverage";
import {useMessageGroupBy} from "hooks/useMessageGroupBy";
import * as eventTypes from "store/messages/eventTypes";

const max_no_of_data_points = 20;

export const AssertionBidByBlock = props => {
  const data = useMessageGroupBy(props.community, eventTypes.ASSERTION, max_no_of_data_points, "block_number", "bid");

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
