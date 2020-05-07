import produce from "immer";

import * as entities from "./entities";
import * as eventTypes from "./eventTypes";

import * as communityActionTypes from "../community/communityActionTypes";

const LIMIT = 20;

let _producer = (entity, draftState) => {
  draftState.count += 1;
  draftState.last = entity;
  draftState.messages = [entity, ...draftState.messages.slice(0, LIMIT)];
};

export const messagesReducer = (state = {}, action) =>
  produce(state, draft => {
    switch (action.type) {
      case communityActionTypes.COMMUNITY_CONNECT:
        draft[action.community_url] = Object.keys(eventTypes).reduce(
          (acc, cur) => {
            acc[eventTypes[cur]] = {
              count: 0,
              last: null,
              messages: [],
            };
            return acc;
          },
          {},
        );
        return;

      case communityActionTypes.COMMUNITY_CONNECTION_MESSAGE__SUCCEEDED:
        let entity;
        let draftState;

        switch (action.data.event) {
          case eventTypes.BLOCK:
            entity = new entities.MessageBlock(action.data);
            draftState = draft[action.community_url][eventTypes.BLOCK];
            _producer(entity, draftState);
            return;

          case eventTypes.BOUNTY:
            entity = new entities.MessageBounty(action.data);
            draftState = draft[action.community_url][eventTypes.BOUNTY];
            _producer(entity, draftState);
            draftState.total_amount = (draftState.total_amount || 0) + entity.amount;
            return;

          case eventTypes.ASSERTION:
            entity = new entities.MessageAssertion(action.data);
            draftState = draft[action.community_url][eventTypes.ASSERTION];
            _producer(entity, draftState);
            draftState.total_bid = (draftState.total_bid || 0) + entity.bid;
            return;

          case eventTypes.REVEAL:
            entity = new entities.MessageReveal(action.data);
            draftState = draft[action.community_url][eventTypes.REVEAL];
            _producer(entity, draftState);
            return;

          case eventTypes.SETTLED:
            entity = new entity.MessageSettled(action.data);
            draftState = draft[action.community_url][eventTypes.SETTLED];
            _producer(entity, draftState);
            draftState.total_payout = (draftState.total_payout || 0) + entity.payout;
            return;

          default:
            return;
        }

      default:
        return;
    }
  });
