import React from "react";
import P from "prop-types";

export const Svg = props => {
  return (
    <svg
      viewBox={`0 0 ${props.W} ${props.H}`}
      preserveAspectRatio="none"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {props.children}
    </svg>
  );
};

Svg.propTypes = {
  W: P.number.isRequired,
  H: P.number.isRequired,
  children: P.array.isRequired,
};

export const SvgBar = props => {
  let _posX = props.W - props.w - (props.w + props.gapW) * (props.noOfDataPoints - props.currentDataPointIndex - 1);
  return <path d={`M ${_posX} ${props.H} v -${props.h} h ${props.w} v ${props.h} Z`} fill={props.fill} />;
};

SvgBar.propTypes = {
  fill: P.string.isRequired,
  currentDataPointIndex: P.number.isRequired,
  noOfDataPoints: P.number.isRequired,
  gapW: P.number.isRequired,
  W: P.number.isRequired,
  H: P.number.isRequired,
  w: P.number.isRequired,
  h: P.number.isRequired,
};

export const SvgBarChart = props => {
  let _W = props.maxNoOfDataPoints * (props.w + props.gapW) - props.gapW;
  return (
    <Svg W={_W} H={props.H}>
      {props.data.map((data, i) => (
        <SvgBar
          key={i}
          fill={props.barFill}
          currentDataPointIndex={i}
          noOfDataPoints={props.data.length}
          gapW={props.gapW}
          W={_W}
          H={props.H}
          w={props.w}
          h={data.h}
        />
      ))}
      <path
        d={`M 0 ${props.H} m 0 -${props.avg} l ${_W} 0`}
        stroke={props.avgLineStrokeColor}
        strokeWidth={props.avgLineStrokeWidth}
      />
    </Svg>
  );
};

SvgBarChart.propTypes = {
  data: P.array.isRequired,
  maxNoOfDataPoints: P.number.isRequired,
  avgLineStrokeColor: P.string,
  avgLineStrokeWidth: P.number,
  barFill: P.string,
  gapW: P.number,
  H: P.number.isRequired,
  w: P.number,
};

SvgBarChart.defaultProps = {
  avgLineStrokeColor: "#7bfa7f",
  barFill: "#6d3aec",
  gapW: 1,
  w: 10,
};
