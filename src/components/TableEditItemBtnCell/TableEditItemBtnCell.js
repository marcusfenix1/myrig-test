import React from "react";
import styled from "styled-components";

const EditBtn = styled.button`
  width: 22px;
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

const TableEditItemBtnCell = () => {
  return (
    <td>
      <EditBtn>
        <StyledIcon
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="24"
          fill="none"
          viewBox="0 0 22 24"
        >
          <path
            fillRule="evenodd"
            d="M15.126 2c.585 0 1.146.261 1.556.723l2.773 3.101c.413.462.645 1.088.645 1.741s-.232 1.28-.645 1.74L9.332 20.625c-.625.806-1.51 1.3-2.525 1.378h-4.59v-1l.002-4.215c.076-1.054.515-2.035 1.183-2.694L13.568 2.725C13.98 2.26 14.541 2 15.126 2zM6.744 20.005c.478-.038.923-.287 1.28-.743l6.761-7.562-3.357-3.755-6.801 7.605c-.362.358-.586.86-.623 1.318v3.135l2.74.002zM12.693 6.53l3.357 3.755 2.14-2.394c.078-.087.121-.204.121-.327 0-.122-.043-.24-.12-.326l-2.776-3.104c-.076-.086-.18-.135-.29-.135-.108 0-.212.049-.289.135L12.693 6.53z"
            clipRule="evenodd"
          />
        </StyledIcon>
      </EditBtn>
    </td>
  );
};

export default TableEditItemBtnCell;
