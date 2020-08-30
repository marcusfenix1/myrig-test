import React from "react";

import TableCheckboxCell from "../TableCheckboxCell/TableCheckboxCell";
import TableFullNameCell from "../TableFullNameCell/TableFullNameCell";
import TableBirthdayCell from "../TableBirthdayCell/TableBirthdayCell";
import TableDeleteBtnCell from "../TableDeleteBtnCell/TableDeleteBtnCell";
import TableHeightCell from "../TableHeightCell/TableHeightCell";
import TableSalaryCell from "../TableSalaryCell/TableSalaryCell";
import TableWeightCell from "../TableWeightCell/TableWeightCell";
import TableEditBtnCell from "../TableEditBtnCell/TableEditBtnCell";
import TableIndexCell from "../TableIndexCell/TableIndexCell";

const TableRow = ({ idx }) => {
  return (
    <tr>
      <TableCheckboxCell />
      <TableIndexCell idx={idx} />
      <TableFullNameCell />
      <TableBirthdayCell />
      <TableHeightCell />
      <TableWeightCell />
      <TableSalaryCell />
      <TableEditBtnCell />
      <TableDeleteBtnCell />
    </tr>
  );
};

export default TableRow;
