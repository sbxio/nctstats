import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {ResponsiveContainer, BarChart, Bar} from "recharts";

import * as eventTypes from "store/messages/eventTypes";

const community_id = "wss://nu.k.polyswarm.network/v1/events/?chain=side";

export const AssertionBidByBlock = props => {
  const message = useSelector(state => state.messages[community_id][eventTypes.ASSERTION].last);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (message) {
      setData(data => {
        let index = data.findIndex(block => block.name === message.block_number);
        if (index === -1) {
          if (data.length === 20) {
            data.shift();
          }
          return [...data, {name: message.block_number, bid: message.bid}];
        } else {
          data[index].bid += message.bid;
          return [...data];
        }
      });
    }
  }, [message]);

  return (
    <div style={{marginBottom: '1.618em'}}>
      <ResponsiveContainer width="100%" height={100}>
        <BarChart data={data}>
          <Bar dataKey="bid" fill="#6d3aec" />
        </BarChart>
      </ResponsiveContainer>
      <div>assertion bid total by block</div>
    </div>
  );
};
