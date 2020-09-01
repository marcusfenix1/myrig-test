import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import TableHead from "../TableHead/TableHead";
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

import fetchEmployeesData from "../../services/fetchEmployeesData";

//============STYLES======================//

const StyledTable = styled.table`
  width: 1200px;
  border-collapse: collapse;
  border-radius: 6px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px #f5f5f5;
  background-color: #ffffff;
`;

const TableCaption = styled.caption`
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4c4c4c;
  margin-bottom: 16px;
  text-align: left;
`;

const Table = () => {
  const [status, setChecked] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchEmployeesData.fetchEmployees();
      const data = result.map((item) => ({
        ...item,
        id: uuidv4(),
        isChecked: false,
      }));
      setData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data.every((item) => item.isChecked)) {
      setChecked(true);
    } else setChecked(false);
    if (data.length === 0) {
      setChecked(false);
    }
  }, [data]);

  function handleRemove(id) {
    const newData = data.filter((item) => item.id !== id);
    return setData(newData);
  }

  function updateCheckStatus() {
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
      <StyledTable className="table">
        <TableCaption>Таблица пользователей</TableCaption>
        <TableHead updateCheckStatus={updateCheckStatus} status={status} />
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
      </StyledTable>
      <TableDeleteCheckedBtn onDeleteChecked={handleDeleteItems} />
    </>
  );
};

export default Table;
