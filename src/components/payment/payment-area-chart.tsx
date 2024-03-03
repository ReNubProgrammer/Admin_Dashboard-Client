import { format } from "date-fns";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PaymentAggregation from "./payment-aggregation";

export default function GraphicAreaChart({ allData, strokeColor, areaColor }) {
  let datas = allData.map((e: any) => {
    const data = {
      Amount: e.amount,
      date: format(e.date, "d MMM"),
    };
    return data;
  });

  const dataRemain = PaymentAggregation({data : datas});

  return (
    <div className="w-[100%] h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={dataRemain}
          margin={{
            top: 10,
            right: 0,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"date"} padding={{ left: 0 }} />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={"Amount"}
            stroke={strokeColor}
            strokeWidth={5}
            fill={areaColor}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
