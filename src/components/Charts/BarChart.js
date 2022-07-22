import React, { PureComponent } from 'react';
import { 
    BarChart, Bar, XAxis, YAxis, 
    CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

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
    pv: 3908,
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
    pv: 9800,
    amt: 2500,
  },
  {
    name: 'S',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class CustomBarChart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={"100%"}
          height={"100%"}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
