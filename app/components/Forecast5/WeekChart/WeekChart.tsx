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
  AreaChart,
  XAxis,
  Label,
  Tooltip,
  Area,
  LabelList
} from "recharts";

export const WeekChart = () => {
  const tempScale = useSelector(selectTemperatureScale);
  const { data, status } = useSelector(selectForecast5);
  let chartData: any = [];
  if (status === "succeeded") {
    chartData = data?.list.map((element) => {
      const dt = new Date(+`${element.dt}000`);
      const date = dt.toLocaleDateString("en-us", {
        month: "2-digit",
        day: "2-digit",
      });
      const temp = tempConvert(element.main.temp, tempScale.name);
      return {
        date,
        temp,
      };
    });
  }
  return (
    <div className={styles.div}>
      {chartData && (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <XAxis dataKey="date">
              <Label />
            </XAxis>
            <Tooltip />
            <Area
              connectNulls
              type="natural"
              dataKey="temp"
              strokeWidth={3}
              stroke="#12355b"
              fill="#12355b"
              dot={false}
            >
              <LabelList dataKey={'temp'} position={'top'}/>
            </Area>
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
