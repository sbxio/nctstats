import React from "react";
import {useSelector} from "react-redux";

import {Nectar} from "components/Nectar";
import * as eventTypes from "store/messages/eventTypes";

const community_id = "wss://rho.k.polyswarm.network/v1/events/?chain=side";

export const BountyTable = props => {
  const messages = useSelector(state => state.messages[community_id][eventTypes.BOUNTY].messages);

  return (
    <table>
      <thead>
        <tr>
          <th style={{textAlign: "left"}}>block</th>
          <th style={{textAlign: "left"}}>guid</th>
          <th style={{textAlign: "right"}}>bid</th>
        </tr>
      </thead>
      <tbody>
        {messages.map(message => (
          <tr key={`${Date.now()}-${message.guid}`}>
            <td style={{whiteSpace: "nowrap"}}>{message.block_number}</td>
            <td style={{whiteSpace: "nowrap"}}>{message.guid}</td>
            <td style={{whiteSpace: "nowrap"}}>
              <Nectar amount={message.amount} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
