import React from "react";

const TableFullNameCell = ({ lastName, firstName }) => {
  return (
    <td>
      {firstName} {lastName}
    </td>
  );
};

export default TableFullNameCell;
