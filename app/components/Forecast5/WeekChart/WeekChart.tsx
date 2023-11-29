/* Core */
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  LabelList,
  ReferenceLine,
} from "recharts";

/* Instruments*/
import { useSelector } from "@/lib/redux";
import { 
  selectTemperatureScale, 
  selectForecast5,
} from "@/lib/redux";

import { tempConvert } from "@/lib/tempConvert"; // Importing temperature conversion utility

/* CSS */
import styles from "./weekchart.module.css";


export const WeekChart = () => {
  const tempScale = useSelector(selectTemperatureScale); // Selecting temperature scale from Redux state
  const { data, status } = useSelector(selectForecast5); // Selecting forecast data and status from Redux state

  const chartData = status === "succeeded"
    ? data?.list.map((element) => { // Mapping data for chart display
        const dt = new Date(+`${element.dt}000`); // Converting timestamp to Date object
        const date = dt.toLocaleDateString("en-us", { // Formatting date
          hour: "2-digit",
          weekday: "short",
        });
        const temp = +tempConvert(element.main.temp, tempScale.name, false).toFixed(2); // Converting temperature
        const tempR = Math.round(temp); // Rounding temperature
        const tempLabel = (dt.getHours() === 13 || dt.getHours() === 1) ? `${tempR}°C` : null; // Setting temperature label

        return {
          date,
          tempR,
          temp,
          tempLabel,
        };
      })
    : []; // Empty array if status is not "succeeded"

  return (
    <div className={styles.div}>
      {chartData && (
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData} margin={{ left: -40 }}>
            <ReferenceLine y={0} stroke="lightblue" strokeDasharray="0" /> {/* Reference line on the chart */}
            <Tooltip /> {/* Tooltip for data points */}
            <Line
              type="natural"
              dataKey="temp"
              strokeWidth={3}
              stroke="#12355b"
              dot={false}
            >
              <LabelList dataKey="tempLabel" position="top" offset={15} /> {/* Label for temperature points */}
            </Line>
            <XAxis
              dataKey="date"
              interval={"equidistantPreserveStart"}
              padding={"no-gap"}
            /> {/* X-axis for dates */}
            <YAxis dataKey="tempR" /> {/* Y-axis for rounded temperatures */}
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
