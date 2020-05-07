import React from "react";

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

export const Dashboard = props => (
  <section>
    <h2>nctstats</h2>

    <div style={{display: "flex", flexDirection: "row"}}>
      <div>
        <h3>bounties</h3>
        <BountyAmountByBlock/>
        <BountyCount />
        <BountyAmountTotal />
        <BountyTable />
      </div>
      <div>
        <h3>assertions</h3>
        <AssertionBidByBlock />
        <AssertionCount />
        <AssertionBidTotal />
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
