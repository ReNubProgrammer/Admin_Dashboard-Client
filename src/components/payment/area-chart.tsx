import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function GraphicAreaChart({ allData, dataKeyX, dataKeyArea }) {
  return (
    <AreaChart
      className=" w-[500px]"
      data={allData}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={dataKeyX} />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey={dataKeyArea}
        stroke="#8884d8"
        fill="#8884d8"
      />
    </AreaChart>
  );
}
