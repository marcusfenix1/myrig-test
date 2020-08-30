import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import TableFullNameCell from "../TableFullNameCell/TableFullNameCell";
import TableIndexCell from "../TableIndexCell/TableIndexCell";
import TableDeleteBtnCell from "../TableDeleteBtnCell/TableDeleteBtnCell";
import TableBirthdayCell from "../TableBirthdayCell/TableBirthdayCell";
import TableEditBtnCell from "../TableEditBtnCell/TableEditBtnCell";
import TableHeightCell from "../TableHeightCell/TableHeightCell";
import TableWeightCell from "../TableWeightCell/TableWeightCell";
import TableSalaryCell from "../TableSalaryCell/TableSalaryCell";
import TableCheckboxCell from "../TableCheckboxCell/TableCheckboxCell";

import hardcodeData from "../../hardcode";

const Table = () => {
  const [data, setData] = useState(
    hardcodeData.map((item) => ({
      ...item,
      id: uuidv4(),
    }))
  );
  const [checkedItemsId, setCheckedItemsId] = useState([]);
  const [status, setChecked] = useState({ checked: false, checkedAll: false });

  useEffect(() => {});

  function handleRemove(id) {
    const newData = data.filter((item) => item.id !== id);

    return setData(newData);
  }

  function handleCheck() {}

  function updateCheckedItem() {
    setCheckedItemsId((prevState) => {
      return { ...prevState, isChecked: true };
    });
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              onChange={() => handleCheck()}
              checked={status.checked}
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
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={item.id}>
            <TableCheckboxCell id={item.id} />
            <TableIndexCell idx={i} />
            <TableFullNameCell
              firstName={item.first_name}
              lastName={item.last_name}
            />
            <TableBirthdayCell birthDay={item.date_of_birth} />
            <TableHeightCell height={item.height} />
            <TableWeightCell weight={item.weight} />
            <TableSalaryCell salary={item.salary} />
            <TableEditBtnCell />
            <TableDeleteBtnCell
              onRemove={handleRemove}
              id={item.id}
              updateCheckedItem={updateCheckedItem}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
