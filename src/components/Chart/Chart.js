/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { getMonthIncomes } from "../../services/chart";

export const Chart = ({ incomes }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMonthIncomes(incomes).then(result => setData(result));
  }, [incomes]);

  return (
    <div className="chart">
      <p>COMPANY MONTHLY INCOME</p>
      <LineChart width={600} height={200} data={data}>
        <XAxis size={10} padding={{ right: 30 }} dataKey="date" interval={1} />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Line type="monotone" dataKey="income" stroke="#A5A11E" />
      </LineChart>
    </div>
  );
};
