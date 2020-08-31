import React from "react";

const TableBirthdayCell = ({ birthDay }) => {
  const age = Math.floor(
    (new Date().getTime() - birthDay * 1000) /
      (1000 * 60 * 60 * 24 * 365).toFixed(1)
  );
  return <td>{age}</td>;
};

export default TableBirthdayCell;
