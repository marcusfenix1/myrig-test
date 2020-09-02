import React, { useState, useEffect } from "react";
import currencyExchangeApi from "../../services/currencyExchangeApi";

const TableSalaryCell = ({ salary }) => {
  const [usdSalary, setUsdSalary] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await currencyExchangeApi.convertCurrency(salary);
      setUsdSalary(result);
    };
    fetchData();
  });

  return <td>{usdSalary}</td>;
};

export default TableSalaryCell;
