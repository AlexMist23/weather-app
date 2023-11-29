"use client";
import {
  selectForecast5,
  useSelector,
  selectTemperatureScale,
} from "@/lib/redux";

import styles from "./weekchart.module.css";
import { tempConvert } from "@/lib/tempConvert";
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  Line,
  Area,
  LabelList,
  CartesianGrid,
  ReferenceLine,
} from "recharts";

export const WeekChart = () => {
  const tempScale = useSelector(selectTemperatureScale);
  const { data, status } = useSelector(selectForecast5);
  let chartData: any = [];
  if (status === "succeeded") {
    chartData = data?.list.map((element) => {
      const dt = new Date(+`${element.dt}000`);
      const date = dt.toLocaleDateString("en-us", {
        hour: "2-digit",
        weekday: "short",
      });
      const temp = +tempConvert(
        element.main.temp,
        tempScale.name,
        false
      ).toFixed(2);
      const tempR = Math.round(temp);
      const tempLabel =
        dt.getHours() === 13 || dt.getHours() === 1 ? `${tempR}°C` : null;
      return {
        date,
        tempR,
        temp,
        tempLabel,
      };
    });
  }
  return (
    <div className={styles.div}>
      {chartData && (
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData} margin={{ left: -40 }}>
            <CartesianGrid/>
            <ReferenceLine y={0} stroke="lightblue" strokeDasharray="0" />
            <Tooltip />
            <Line
              type="natural"
              dataKey="temp"
              strokeWidth={3}
              stroke="#12355b"
              dot={false}
            >
              <LabelList dataKey="tempLabel" position='top' offset={15}/>
            </Line>
            <XAxis
              dataKey="date"
              interval={"equidistantPreserveStart"}
              padding={"no-gap"}
            ></XAxis>
            <YAxis dataKey="tempR"></YAxis>
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
