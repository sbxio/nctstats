import React from "react";
import {useSelector} from "react-redux";

import {Nectar} from "components/Nectar";
import * as reducers from "constants/reducers";
import * as eventTypes from "store/messages/eventTypes";

export const BountyTable = props => {
  const messages = useSelector(state => state[reducers.messages][props.community][eventTypes.BOUNTY].messages);

  return (
    <table style={{minWidth: `${443 / 12}em`}}>
      <thead>
        <tr>
          <th style={{textAlign: "left", minWidth: `${75 / 12}em`}}>block</th>
          <th style={{textAlign: "left", minWidth: `${264 / 12}em`}}>guid</th>
          <th style={{textAlign: "right"}}>bounty</th>
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
