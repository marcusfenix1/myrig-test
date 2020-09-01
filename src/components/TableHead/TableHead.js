import React from "react";
import styled from "styled-components";

const Thead = styled.thead`
  background-color: #f0f0f0;
`;

const TableHead = ({ updateCheckStatus, status }) => {
  return (
    <Thead>
      <tr>
        <th>
          <input
            type="checkbox"
            onChange={() => updateCheckStatus()}
            checked={status}
          />
        </th>
        <th>№</th>
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
