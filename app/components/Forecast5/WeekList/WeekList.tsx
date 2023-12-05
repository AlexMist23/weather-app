"use client";

/* Core */
import { useState, useEffect } from "react";

/* Instruments */
import {
  useSelector,
  type Forecast5ListElement,
  selectActiveDate,
  useDispatch,
  activeDateSlice,
} from "@/lib/redux";

/* CSS */
import styles from "./weeklist.module.css";
import {format} from "date-fns";

export const WeekList: React.FC<WeekListProps> = ({ sortedList }) => {
  const dispatch = useDispatch();
  const activeDate = new Date(useSelector(selectActiveDate))

  const weekListSorted = sortedList;

  const liClickHandle = (monthYearKey:string) => {
    const date = new Date(monthYearKey)
    if (activeDate.getFullYear() != date.getFullYear()){
      dispatch(activeDateSlice.actions.setYear(date.getFullYear()))
    }
    if (activeDate.getMonth() != date.getMonth()){
      dispatch(activeDateSlice.actions.setMonth(date.getMonth()))
    }
    if (activeDate.getDate() != date.getDate()){
      dispatch(activeDateSlice.actions.setDay(date.getDate()))
    }
  }

  return (
    <ul className={styles.ul}>
      {Object.keys(weekListSorted).map((monthYearKey, index) => (
        <li
          onClick={() => liClickHandle(monthYearKey)}
          className={`${styles.li} ${
            monthYearKey === format(activeDate, 'yyyy-MM-dd') ? styles.liActive : ""
          }`}
          key={index}
        >
          <p>
            {new Date(monthYearKey).toLocaleString("en-us", {
              weekday: "short",
            })}
          </p>
          <p>
            {new Date(monthYearKey).toLocaleString("en-us", {
              day: "2-digit",
              month: "2-digit",
            })}
          </p>
        </li>
      ))}
    </ul>
  );
};

interface WeekListProps {
  sortedList: Record<string, Record<string, Forecast5ListElement[]>>;
}
