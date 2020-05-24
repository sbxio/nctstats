import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import * as reducers from "constants/reducers";

export function useMessageGroupBy(
  community,
  eventType,
  dataLengthLimit,
  groupByField,
  nctField,
) {
  const message = useSelector(
    state => state[reducers.messages][community][eventType].last,
  );
  const [data, setData] = useState([]);

  useEffect(() => {
    if (message) {
      setData(data => {
        let index = data.findIndex(
          o => o[groupByField] === message[groupByField],
        );
        if (index === -1) {
          if (data.length === dataLengthLimit) {
            data.shift();
          }
          return [
            ...data,
            {[groupByField]: message[groupByField], h: message[nctField]},
          ];
        } else {
          data[index].h += message[nctField];
          return [...data];
        }
      });
    }
  }, [message, community, eventType, dataLengthLimit, groupByField, nctField]);

  return data;
}
