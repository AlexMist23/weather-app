/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const selectForecast5 = (state: ReduxState) => state.forecast5;

export const selectForecast5DateList = (state: ReduxState) => state.forecast5.data?.list.reduce((acc: Record<string, Record<string, T[]>>, obj: T) => {
    const dt = new Date(obj.dt * 1000);
    const dateKey = dt.toLocaleDateString();
    const dayKey = dt.getDate().toString();

    acc[dateKey] = acc[dateKey] || {};
    acc[dateKey][dayKey] = acc[dateKey][dayKey] || [];
    acc[dateKey][dayKey].push(obj);

    return acc;
  }, {});;