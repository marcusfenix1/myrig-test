import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import TableDeleteCheckedBtn from "../TableDeleteCheckedBtn/TableDeleteButton";
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
  const [status, setChecked] = useState(false);
  const [data, setData] = useState(
    hardcodeData.map((item) => ({
      ...item,
      id: uuidv4(),
      isChecked: false,
    }))
  );

  useEffect(() => {
    if (data.every((item) => item.isChecked)) {
      return setChecked(true);
    }
    setChecked(false);
  }, [data]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetchEmployeesData.fetchEmployees();
  //     setData(
  //       result.map((item) => ({
  //         ...item,
  //         id: uuidv4(),
  //         isChecked: false,
  //       }))
  //     );
  //   };
  //   fetchData();

  //   if (data.every((item) => item.isChecked)) {
  //     return setChecked(true);
  //   }
  //   setChecked(false);
  // }, [data]);

  function handleRemove(id) {
    const newData = data.filter((item) => item.id !== id);
    return setData(newData);
  }

  function handleCheck() {
    if (status) {
      const newData = data.map((item) => {
        return { ...item, isChecked: false };
      });
      setChecked(false);
      return setData(newData);
    }

    if (!status) {
      const newData = data.map((item) => {
        return { ...item, isChecked: true };
      });
      setChecked(true);
      return setData(newData);
    }
  }

  function updateCheckedItem(id) {
    const isCheckedItem = data.find((item) => item.id === id);

    console.log(isCheckedItem);

    if (isCheckedItem.isChecked === true) {
      const newItems = data.map((item) => {
        if (item.id === id) {
          return { ...item, isChecked: false };
        }
        return item;
      });
      return setData(newItems);
    }

    if (isCheckedItem.isChecked === false) {
      const newItems = data.map((item) => {
        if (item.id === id) {
          return { ...item, isChecked: true };
        }
        return item;
      });
      return setData(newItems);
    }
  }

  function handleDeleteItems() {
    const newData = data.filter((item) => !item.isChecked);
    return setData(newData);
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={() => handleCheck()}
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
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={item.id}>
              <TableCheckboxCell
                id={item.id}
                updateCheckedItem={updateCheckedItem}
                isChecked={item.isChecked}
              />
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
              <TableDeleteBtnCell onRemove={handleRemove} id={item.id} />
            </tr>
          ))}
        </tbody>
      </table>
      <TableDeleteCheckedBtn onDeleteChecked={handleDeleteItems} />
    </>
  );
};

export default Table;
