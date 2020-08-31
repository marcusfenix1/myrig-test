import React from "react";

const TableCheckboxCell = ({ isChecked, id, updateCheckedItem }) => {
  return (
    <td>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => updateCheckedItem(id)}
      />
    </td>
  );
};

export default TableCheckboxCell;
