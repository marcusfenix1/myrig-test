import React from "react";

const TableDeleteButton = ({ onDeleteChecked }) => {
  return (
    <button type="button" onClick={() => onDeleteChecked()}>
      Delete all
    </button>
  );
};

export default TableDeleteButton;
