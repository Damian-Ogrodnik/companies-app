/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { getMonthIncomes } from "../../services/chart";

export const Chart = ({ incomes }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMonthIncomes(incomes).then(result => setData(result));
  }, [incomes]);

  return (
    <div className="chart">
      <div className="chart__wrapper">
        <LineChart
          width={600}
          height={200}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#A5A11E" />
        </LineChart>
      </div>
    </div>
  );
};
