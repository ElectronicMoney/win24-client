import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'M',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'T',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'W',
    uv: 2000,
    pv: 4800,
    amt: 2290,
  },
  {
    name: 'T',
    uv: 2780,
    pv: 8908,
    amt: 2000,
  },
  {
    name: 'F',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'S',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'S',
    uv: 3490,
    pv: 2300,
    amt: 2100,
  },
];

export default class CustomLineChart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={"100%"}
          height={"100%"}
          data={data}
          margin={{
              top: 0, right: 0, bottom: 0, left: 0,
            }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
