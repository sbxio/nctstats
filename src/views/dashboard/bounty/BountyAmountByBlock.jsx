import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import {SvgBarChart} from "components/charting/SvgBarChart";
import {Nectar} from "components/Nectar";
import * as eventTypes from "store/messages/eventTypes";

const community_id = "wss://nu.k.polyswarm.network/v1/events/?chain=side";
const max_no_of_data_points = 20;

export const BountyAmountByBlock = props => {
  const message = useSelector(state => state.messages[community_id][eventTypes.BOUNTY].last);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (message) {
      setData(data => {
        let index = data.findIndex(block => block.name === message.block_number);
        if (index === -1) {
          if (data.length === max_no_of_data_points) {
            data.shift();
          }
          return [...data, {name: message.block_number, h: message.amount}];
        } else {
          data[index].h += message.amount;
          return [...data];
        }
      });
    }
  }, [message]);

  let H = data.length ? Math.max(...data.map(d => d.h)) : 0;
  let total = data.reduce((accumulator, currentValue) => accumulator + currentValue.h, 0);
  let avg = total === 0 ? 0 : total / data.length;

  return (
    <div style={{height: "10em", marginBottom: "1.618em"}}>
      <SvgBarChart
        data={data}
        maxNoOfDataPoints={max_no_of_data_points}
        H={H}
        avg={avg}
        avgLineStrokeWidth={(H * 2) / 120}
      />
      <div>
        average per block <Nectar amount={avg} />
      </div>
    </div>
  );
};
