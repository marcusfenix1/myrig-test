import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import fetchUsersData from "../../services/fetchUsersData";

import TableHead from "../TableHead/TableHead";
import TableRemoveItemsButton from "../TableRemoveItemsButton/TableRemoveItemsButton";
import TableFullNameCell from "../TableFullNameCell/TableFullNameCell";
import TableIndexCell from "../TableIndexCell/TableIndexCell";
import TableRemoveItemBtnCell from "../TableRemoveItemBtnCell/TableRemoveItemBtnCell";
import TableBirthdayCell from "../TableBirthdayCell/TableBirthdayCell";
import TableEditBtnCell from "../TableEditBtnCell/TableEditBtnCell";
import TableHeightCell from "../TableHeightCell/TableHeightCell";
import TableWeightCell from "../TableWeightCell/TableWeightCell";
import TableSalaryCell from "../TableSalaryCell/TableSalaryCell";
import TableCheckboxCell from "../TableCheckboxCell/TableCheckboxCell";
import TableTitle from "../TableTitle/TableTitle";

//============STYLES======================//

const StyledTable = styled.table`
  td,
  th {
    height: 48px;
    font-size: 14px;
    color: #4c4c4c;
  }

  tbody tr {
    :nth-of-type(even) {
      background-color: #fafafa;
    }
  }

  border-collapse: collapse;
  border-radius: 6px;
  overflow: hidden;
  width: 1200px;
  margin-bottom: 24px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

//========================================//

const Table = () => {
  const [status, setChecked] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchUsersData.fetchData();
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

  function handleRemoveItem(id) {
    const newData = data.filter((item) => item.id !== id);
    return setData(newData);
  }

  function handleRemoveItems() {
    const newData = data.filter((item) => !item.isChecked);
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

  function updateIsCheckedItem(id) {
    const isCheckedItem = data.find((item) => item.id === id);

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

  return (
    <>
      <TableTitle />
      <StyledTable>
        <TableHead updateCheckStatus={updateCheckStatus} status={status} />
        <tbody>
          {data.map((item, i) => (
            <tr key={item.id}>
              <TableCheckboxCell
                id={item.id}
                updateIsCheckedItem={updateIsCheckedItem}
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
              <TableRemoveItemBtnCell
                onRemove={handleRemoveItem}
                id={item.id}
              />
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <TableRemoveItemsButton onRemove={handleRemoveItems} data={data} />
    </>
  );
};

export default Table;
