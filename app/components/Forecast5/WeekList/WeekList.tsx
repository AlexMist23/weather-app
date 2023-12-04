"use client";

/* Core */
import { useState, useEffect } from "react";

/* Instruments */
import type { Forecast5Data } from "@/lib/redux";
import  { useSelector, selectForecast5DateList } from "@/lib/redux";

/* CSS */
import styles from "./weeklist.module.css";

export const WeekList: React.FC<WeekListProps> = ({ sortedList }) => {
  const [activeWeekDay, setActiveWeekDay] = useState<string>('');
  const weekListSorted = sortedList;

  useEffect(() => {
    const firstDateKey = Object.keys(weekListSorted)[0];
    if (firstDateKey) {
      setActiveWeekDay(firstDateKey);
    }
  }, []);

  return (
    <ul className={styles.ul}>
      {Object.keys(weekListSorted).map((monthYearKey, index) => (
        <li
          onClick={() => setActiveWeekDay(monthYearKey)}
          className={`${styles.li} ${monthYearKey === activeWeekDay ? styles.liActive : ''}`}
          key={index}
        >
          <p>
            {new Date(monthYearKey).toLocaleString('en-us', {
              weekday: 'short',
            })}
          </p>
          <p>
            {new Date(monthYearKey).toLocaleString('en-us', {
              day: '2-digit',
              month: '2-digit',
            })}
          </p>
        </li>
      ))}
    </ul>
  );
};

interface WeekListProps {
  sortedList: Record<string, Record<string, Forecast5Data[]>>;
}