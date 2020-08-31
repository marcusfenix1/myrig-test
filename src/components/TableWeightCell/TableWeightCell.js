import React from "react";

const TableWeightCell = ({ weight }) => {
  const weightInKg = Math.round((weight * 0.453592).toFixed(1));
  return <td>{weightInKg} кг</td>;
};

export default TableWeightCell;
