/* Core */
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  LabelList,
  ReferenceLine,
} from "recharts";

/* Instruments*/
import { Forecast5Data, useSelector } from "@/lib/redux";
import { 
  selectTemperatureScale
} from "@/lib/redux";

import { tempConvert } from "@/lib/tempConvert"; // Importing temperature conversion utility

/* CSS */
import styles from "./weekchart.module.css";


export const WeekChart:React.FC<{data:Forecast5Data}> = ({data}) => {
  const tempScale = useSelector(selectTemperatureScale); // Selecting temperature scale from Redux state

  const chartData = data.list.map((element) => { // Mapping data for chart display
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

  return (
    <div className={styles.div}>
      {chartData && (
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData} margin={{left:0, right:0, top:0, bottom:-2}}>
            <ReferenceLine y={0} stroke="lightblue" strokeDasharray="0" /> {/* Reference line to 0°C */}
            <CartesianGrid/>
            <Tooltip /> {/* Tooltip for data points */}
            <Line
              type="natural"
              dataKey="temp"
              strokeWidth={3}
              stroke="#12355b"
              dot={false}
            >
              <LabelList dataKey="tempLabel" position='top' offset={15} stroke="#74776b"/> {/* Label for temperature points */}
            </Line>
            <XAxis
              dataKey="date"
              interval={'equidistantPreserveStart'}
            />
            <YAxis dataKey="temp" hide domain={([dataMin, dataMax]) => {
              const min = dataMin - (dataMax - dataMin) / 2
              const max = dataMax + (dataMax - dataMin) / 2
              return [min, max]
            }}/> 
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
