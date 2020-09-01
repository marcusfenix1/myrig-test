import React from "react";
import styled from "styled-components";

const Thead = styled.thead`
  background-color: #f0f0f0;

  tr > th {
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #4c4c4c;
  }
`;

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
  background-color: #fff;
  display: inline-block;
  width: 18px;
  height: 18px;
  border: solid 2px #e8e8e8;
  border-radius: 6px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const StyledColumn = styled.th`
  && {
    text-align: center;
  }
`;

const TableHead = ({ updateCheckStatus, status }) => {
  return (
    <Thead>
      <tr>
        <StyledColumn>
          <CheckboxContainer>
            <HiddenCheckbox
              checked={status}
              onChange={() => updateCheckStatus()}
            />
            <StyledCheckbox checked={status}>
              <Icon viewBox="0 0 24 24">
                <rect x="1" y="1" rx="6" ry="6" width="22" height="22" />
              </Icon>
            </StyledCheckbox>
          </CheckboxContainer>
        </StyledColumn>
        <StyledColumn>№</StyledColumn>
        <th>ФИО</th>
        <th>Возраст (лет)</th>
        <th>Рост</th>
        <th>Вес</th>
        <th>Зарплата</th>
        <th></th>
        <th></th>
      </tr>
    </Thead>
  );
};

export default TableHead;
