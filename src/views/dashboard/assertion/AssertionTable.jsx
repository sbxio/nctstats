import React from "react";
import {useSelector} from "react-redux";

import {Nectar} from "components/Nectar";
import * as reducers from "constants/reducers";
import * as eventTypes from "store/messages/eventTypes";

export const AssertionTable = props => {
  const messages = useSelector(state => state[reducers.messages][props.community][eventTypes.ASSERTION].messages);

  return (
    <table>
      <thead>
        <tr>
          <th style={{textAlign: "left"}}>block</th>
          <th style={{textAlign: "left"}}>bounty guid</th>
          <th style={{textAlign: "right"}}>bid</th>
        </tr>
      </thead>
      <tbody>
        {messages.map(message => (
          <tr key={`${Date.now()}-${message.author}-${message.bounty_guid}`}>
            <td style={{whiteSpace: "nowrap"}}>{message.block_number}</td>
            <td style={{whiteSpace: "nowrap"}}>{message.bounty_guid}</td>
            <td style={{whiteSpace: "nowrap"}}>
              <Nectar amount={message.bid} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
