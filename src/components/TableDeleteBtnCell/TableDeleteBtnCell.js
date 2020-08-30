import React from "react";
import styled from "styled-components";

const DeleteBtn = styled.button`
  width: 21.5px;
  height: 24px;
  object-fit: contain;
`;
const TableDeleteBtnCell = ({ onRemove, id }) => {
  return (
    <td>
      <DeleteBtn type="button" onClick={() => onRemove(id)}></DeleteBtn>
    </td>
  );
};

export default TableDeleteBtnCell;
