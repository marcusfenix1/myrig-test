import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  align-self: flex-start;
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

function TableTitle() {
  return <Title>Таблица пользователей</Title>;
}

export default TableTitle;
