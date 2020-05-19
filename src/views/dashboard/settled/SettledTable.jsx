import React from "react";
import {useSelector} from "react-redux";

import {Nectar} from "components/Nectar";
import * as eventTypes from "store/messages/eventTypes";

const community_id = "wss://rho.k.polyswarm.network/v1/events/?chain=side";

export const SettledTable = props => {
  const messages = useSelector(state => state.messages[community_id][eventTypes.SETTLED].messages);

  return (
    <table>
      <tbody>
        {messages.map(message => (
          <tr>
            <td>{message.block_number}</td>
            <td>{message.bounty_guid}</td>
            <td>
              <Nectar amount={message.payout} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
