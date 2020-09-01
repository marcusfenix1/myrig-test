import React from "react";
import styled from "styled-components";

const StyledCell = styled.td`
  && {
    text-align: center;
    font-weight: bold;
  }
`;

const TableIndexCell = ({ idx }) => {
  return <StyledCell>{idx + 1}</StyledCell>;
};

export default TableIndexCell;
