import React from "react";
import parseHeightData from "../../utils/parseHeightData";

const TableHeightCell = ({ height }) => {
  const metricHeight = parseHeightData.parseHeight(height);
  const m = Math.floor((metricHeight / 100).toFixed(1));
  const cm = metricHeight % 100;
  return (
    <td>
      {m}м {cm}см
    </td>
  );
};

export default TableHeightCell;

// const m = Math.floor((metricHeight / 100).toFixed(1));
