import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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
    pv: 8800,
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
    pv: 1800,
    amt: 2500,
  },
  {
    name: 'S',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class CustomAreaChart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={"100%"}
          height={"100%"}
          data={data}
        >
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
