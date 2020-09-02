import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 215px;
  height: 48px;
  border: 0px;
  border-radius: 6px;
  background-color: #0085be;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  align-self: flex-end;

  :hover {
    background-color: #02597e;
  }

  :active,
  :focus {
    outline: none;
  }

  :disabled {
    border: solid 2px #dadada;
    background-color: #fff;
    color: #dadada;
  }

  :active {
    border: solid 2px #002abe;
    background-color: #002abe;
  }
`;

const TableRemoveItemsButton = ({ onRemove, data }) => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (data.some((item) => item.isChecked)) {
      setStatus(false);
    } else setStatus(true);
  }, [data]);

  return (
    <Button type="button" disabled={status} onClick={() => onRemove()}>
      Удалить выбранные
    </Button>
  );
};

export default TableRemoveItemsButton;
