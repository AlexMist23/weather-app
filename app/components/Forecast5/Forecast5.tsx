"use client";

import {
  useSelector,
  useDispatch,
  selectLocation,
  selectForecast5,
  setForecast5Async,
} from "@/lib/redux";

import { WeekChart } from "./WeekChart/WeekChart";
import styles from "./forecast5.module.css";
import { useEffect } from "react";

export const Forecast5 = () => {
  const dispatch = useDispatch();
  const {
    data: forecastData,
    status: forecastStatus,
    error,
  } = useSelector(selectForecast5);
  const location = useSelector(selectLocation);

  useEffect(() => {
    if (location.status === "succeeded" && location.data) {
      const { lat, lon } = location.data;
      dispatch(setForecast5Async({lat, lon}));
    }
  }, [location.data]);
  return (
    <>
      {forecastStatus === "loading" && <div className={styles.loader}></div>}
      {forecastStatus === "succeeded" && (
        <>
          <WeekChart />
        </>
      )}
      {forecastStatus === "failed" && <p>{error}</p>}
    </>
  );
};
