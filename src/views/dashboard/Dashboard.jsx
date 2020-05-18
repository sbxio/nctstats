import React from "react";
import {useSelector} from "react-redux";

import * as colors from "constants/colors";

import {AssertionBidByBlock} from "./assertion/AssertionBidByBlock";
import {AssertionBidTotal} from "./assertion/AssertionBidTotal";
import {AssertionCount} from "./assertion/AssertionCount";
import {AssertionTable} from "./assertion/AssertionTable";

import {BountyAmountByBlock} from "./bounty/BountyAmountByBlock";
import {BountyAmountTotal} from "./bounty/BountyAmountTotal";
import {BountyCount} from "./bounty/BountyCount";
import {BountyTable} from "./bounty/BountyTable";

// import {SettledCount} from "./settled/SettledCount";
// import {SettledPayoutTotal} from "./settled/SettledPayoutTotal";
// import {SettledTable} from "./settled/SettledTable";

const community_id = "wss://nu.k.polyswarm.network/v1/events/?chain=side";

export const Dashboard = props => {
  const connClosed = useSelector(state => state.community[community_id].connection.closed);

  return (
    <section>
      <header style={{display: "flex", flexDirection: "row", alignItems: "center", padding: "0.618em 1.618em"}}>
        <div
          style={{
            background: colors.purple,
            display: "inline-block",
            padding: "1em",
            borderRadius: "50%",
          }}
        >
          <div style={{height: 32, width: 34}}>
            <svg id="polyswarm-logo" viewBox="0 0 34 32">
              <path
                fill={colors.white}
                d="M3.624 8.457h16.707c2.5 0 4.534 2.018 4.534 4.497s-2.034 4.497-4.534 4.497h-9.040c-0.712 0-1.291 0.574-1.291 1.28s0.579 1.28 1.291 1.28h9.039c3.924 0 7.116-3.166 7.116-7.058s-3.192-7.058-7.116-7.058h-16.706c-0.712 0-1.291 0.574-1.291 1.28s0.579 1.28 1.291 1.28z"
              />
              <path
                fill={colors.white}
                d="M20.331 0h-6.479c-0.712 0-1.291 0.574-1.291 1.28s0.579 1.28 1.291 1.28h6.479c5.778 0 10.479 4.662 10.479 10.394s-4.701 10.393-10.479 10.393h-16.46c-0.712 0-1.291 0.574-1.291 1.28s0.579 1.28 1.291 1.28h16.459c7.202 0 13.060-5.811 13.060-12.954s-5.858-12.954-13.060-12.954z"
              />
              <path
                fill={colors.white}
                d="M12.846 12.954c0-0.706-0.579-1.28-1.291-1.28h-3.146c-0.712 0-1.291 0.574-1.291 1.28 0 0.709 0.571 1.28 1.043 1.28h3.146c0.906 0 1.539-0.527 1.539-1.28z"
              />
              <path
                fill={colors.white}
                d="M8.76 29.243h-7.469c-0.712 0-1.291 0.574-1.291 1.28s0.579 1.28 1.291 1.28h7.469c0.712 0 1.291-0.574 1.291-1.28s-0.579-1.28-1.291-1.28z"
              />
            </svg>
          </div>
        </div>
        <div
          style={{
            border: `1px solid ${colors.purple}`,
            borderRadius: "1em",
            padding: "0.382em 1.618em",
            position: "relative",
            left: "-1.618em",
            zIndex: "-1",
          }}
        >
          <span
            style={{
              backgroundColor: connClosed ? "#f00" : colors.green,
              borderRadius: "50%",
              display: "inline-block",
              width: "1em",
              height: "1em",
              verticalAlign: "middle",
              margin: "0 0.382em",
              animation: connClosed ? null : "beacon 1.2s infinite ease-in-out",
            }}
          />
          <span>wss://nu.k.polyswarm.network/v1/events/?chain=side</span>
        </div>
      </header>

      <div style={{display: "flex", flexDirection: "row"}}>
        <div style={{padding: "0 0 0 1.618em"}}>
          <h3>bounties</h3>
          <BountyAmountByBlock />
          <div style={{height: "1em"}} />
          <BountyCount />
          <div style={{height: "1em"}} />
          <BountyAmountTotal />
          <div style={{height: "1em"}} />
          <BountyTable />
        </div>
        <div style={{padding: "0 0 0 1.618em"}}>
          <h3>assertions</h3>
          <AssertionBidByBlock />
          <div style={{height: "1em"}} />
          <AssertionCount />
          <div style={{height: "1em"}} />
          <AssertionBidTotal />
          <div style={{height: "1em"}} />
          <AssertionTable />
        </div>
        {/* <div>
          <h3>settled bounties</h3>
          <SettledCount />
          <SettledPayoutTotal />
          <SettledTable />
        </div> */}
      </div>
    </section>
  );
};
