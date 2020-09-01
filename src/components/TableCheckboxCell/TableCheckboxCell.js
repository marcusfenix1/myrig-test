import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.svg`
  fill: #82af00;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  border: solid 2px #e8e8e8;
  border-radius: 6px;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const StyledCell = styled.td`
  text-align: center;
`;

const TableCheckboxCell = ({ isChecked, id, updateCheckedItem }) => {
  return (
    <StyledCell>
      <CheckboxContainer>
        <HiddenCheckbox
          checked={isChecked}
          onChange={() => updateCheckedItem(id)}
        />
        <StyledCheckbox checked={isChecked}>
          <Icon viewBox="0 0 24 24">
            <rect x="1" y="1" rx="6" ry="6" width="22" height="22" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
    </StyledCell>
  );
};

export default TableCheckboxCell;
