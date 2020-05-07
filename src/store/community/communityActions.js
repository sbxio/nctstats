import * as actionTypes from "./communityActionTypes";

const _connect = (community_name, community_url) => dispatch => {
  dispatch({
    type: actionTypes.COMMUNITY_CONNECT,
    community_name,
    community_url,
  });

  const conn = new WebSocket(community_url);

  conn.onopen = event => {
    dispatch({
      type: actionTypes.COMMUNITY_CONNECT__SUCCEEDED,
      community_name,
      community_url,
      event,
    });
  };

  conn.onclose = event => {
    dispatch({
      type: actionTypes.COMMUNITY_CONNECTION__CLOSED,
      community_name,
      community_url,
      event,
    });
  };

  conn.onerror = event => {
    dispatch({
      type: actionTypes.COMMUNITY_CONNECTION__ERROR,
      community_name,
      community_url,
      event,
    });
  };

  conn.onmessage = event => {
    dispatch({
      type: actionTypes.COMMUNITY_CONNECTION_MESSAGE,
      community_name,
      community_url,
      event,
    });
    new Promise((resolve, reject) => {
      try {
        if (typeof event.data?.text === "function") {
          event.data
            .text()
            .then(data => resolve(data))
            .catch(err => reject(err));
        } else {
          resolve(JSON.parse(event.data));
        }
      } catch (err) {
        reject(err);
      }
    })
      .then(data => {
        dispatch({
          type: actionTypes.COMMUNITY_CONNECTION_MESSAGE__SUCCEEDED,
          community_name,
          community_url,
          data,
        });
      })
      .catch(err => {
        dispatch({
          type: actionTypes.COMMUNITY_CONNECTION_MESSAGE__FAILED,
          community_name,
          community_url,
          err,
        });
      });
  };
};

export const registerCommunityAction = (
  community_name,
  community_url,
) => dispatch => {
  _connect(community_name, community_url)(dispatch);
};
