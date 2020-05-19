import React from "react";
import {useSelector} from "react-redux";

import {Nectar} from "components/Nectar";
import * as eventTypes from "store/messages/eventTypes";

const community_id = "wss://rho.k.polyswarm.network/v1/events/?chain=side";

export const AssertionTable = props => {
  const messages = useSelector(state => state.messages[community_id][eventTypes.ASSERTION].messages);

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
            <td>{message.block_number}</td>
            <td>{message.bounty_guid}</td>
            <td>
              <Nectar amount={message.bid} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
