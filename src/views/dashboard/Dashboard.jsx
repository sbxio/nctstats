import React from "react";
import {useSelector} from "react-redux";

import {PolyswarmLogo} from "components/PolyswarmLogo";
import * as colors from "constants/colors";
import * as reducers from "constants/reducers";

import {AssertionBidByBlock} from "./assertion/AssertionBidByBlock";
import {AssertionBidByBounty} from "./assertion/AssertionBidByBounty";
import {AssertionBidTotal} from "./assertion/AssertionBidTotal";
import {AssertionCount} from "./assertion/AssertionCount";
import {AssertionTable} from "./assertion/AssertionTable";

import {BountyAmountByBlock} from "./bounty/BountyAmountByBlock";
import {BountyAmountTotal} from "./bounty/BountyAmountTotal";
import {BountyCount} from "./bounty/BountyCount";
import {BountyTable} from "./bounty/BountyTable";

const HorizontalDivider = props => <div style={{minWidth: "1.618em"}} />;
const VerticalDivider = props => <div style={{height: "1em"}} />;

export const Dashboard = props => {
  const community = useSelector(state => state[reducers.active]);
  const isConnected = useSelector(state => state[reducers.community][community].is_connected);

  return (
    <section>
      <header style={{display: "flex", flexDirection: "row", alignItems: "center", padding: "0.618em 1.618em 3em"}}>
        <div
          style={{
            background: colors.purple,
            display: "inline-block",
            padding: "1em",
            borderRadius: "50%",
          }}
        >
          <div style={{height: 32 * 0.8, width: 34 * 0.8}}>
            <PolyswarmLogo fill={colors.white} />
          </div>
        </div>
        <HorizontalDivider />
        <div
          style={{
            backgroundColor: colors.purple,
            color: colors.white,
            fontWeight: 500,
            border: `1px solid ${colors.purple}`,
            borderRadius: "2em",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "0.382em 1.618em",
          }}
        >
          <span
            style={{
              backgroundColor: isConnected ? colors.green : colors.red,
              borderRadius: "50%",
              display: "inline-block",
              width: "1em",
              height: "1em",
              animation: isConnected && "beacon 1.2s infinite ease-in-out",
            }}
          />
          <div style={{minWidth: "0.618em"}} />
          <span style={{whiteSpace: "nowrap"}}>{community}</span>
        </div>
      </header>

      <div style={{display: "flex", flexDirection: "row", flexWrap: "nowrap"}}>
        <HorizontalDivider />
        <div>
          <div>
            <h3 style={{margin: "0", padding: "0", textTransform: "uppercase"}}>bounties by block</h3>
            <BountyAmountByBlock community={community} />
          </div>
          <VerticalDivider />
          <div>
            <h3 style={{margin: "0", padding: "0", textTransform: "uppercase"}}>assertions by block</h3>
            <AssertionBidByBlock community={community} />
          </div>
          <VerticalDivider />
          <div>
            <h3 style={{margin: "0", padding: "0", textTransform: "uppercase"}}>assertions by bounty</h3>
            <AssertionBidByBounty community={community} />
          </div>
        </div>
        <HorizontalDivider />
        <HorizontalDivider />
        <div>
          <h3 style={{margin: "0", padding: "0", textTransform: "uppercase"}}>bounties</h3>
          <VerticalDivider />
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <BountyCount community={community} />
            <BountyAmountTotal community={community} />
          </div>
          <VerticalDivider />
          <BountyTable community={community} />
        </div>
        <HorizontalDivider />
        <div>
          <h3 style={{margin: "0", padding: "0", textTransform: "uppercase"}}>assertions</h3>
          <VerticalDivider />
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <AssertionCount community={community} />
            <AssertionBidTotal community={community} />
          </div>
          <VerticalDivider />
          <AssertionTable community={community} />
        </div>
        <HorizontalDivider />
      </div>
    </section>
  );
};
