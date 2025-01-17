import React from "react";
import styled from "styled-components";

const DeleteBtn = styled.button`
  width: 21.5px;
  height: 24px;
  border: none;
  background-color: transparent;

  :active,
  :focus {
    outline: none;
  }
`;

const StyledIcon = styled.svg`
  fill: #4c4c4c;

  :hover {
    fill: #82af00;
  }
`;

const TableRemoveItemBtnCell = ({ onRemove, id }) => {
  return (
    <td>
      <DeleteBtn type="button" onClick={() => onRemove(id)}>
        <StyledIcon
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="24"
          fill="none"
          viewBox="0 0 23 24"
        >
          <path
            fillRule="evenodd"
            d="M8.762 1h5.365c.987 0 1.788.895 1.788 2v1h2.683c.987 0 1.788.895 1.788 2v2c0 1.105-.8 2-1.788 2h-.072l-.823 11c0 1.105-.8 2-1.788 2H6.973c-.988 0-1.788-.895-1.785-1.917L4.362 10h-.071c-.988 0-1.789-.895-1.789-2V6c0-1.105.8-2 1.789-2h2.682V3c0-1.105.8-2 1.789-2zM4.29 6h14.307v2H4.29V6zm1.865 4h10.576l-.814 10.917-.003.083H6.973l-.817-11zm7.97-7v1H8.763V3h5.365z"
            clipRule="evenodd"
          />
        </StyledIcon>
      </DeleteBtn>
    </td>
  );
};

export default TableRemoveItemBtnCell;
