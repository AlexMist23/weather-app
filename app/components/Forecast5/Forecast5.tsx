"use client";

import { useEffect } from "react";

import { useSelector, useDispatch } from "@/lib/redux";
import {
  selectLocation,
  selectForecast5,
  selectForecast5DateList,
  setForecast5Async,
} from "@/lib/redux";

import { WeekChart } from "./WeekChart/WeekChart";

import styles from "./forecast5.module.css";
import { WeekList } from "./WeekList/WeekList";

export const Forecast5 = () => {
  const dispatch = useDispatch(); // Initializing useDispatch for Redux actions
  const location = useSelector(selectLocation); // Accessing location state
  const forecastListSorted = useSelector(selectForecast5DateList)
  const { data: forecastData, status: forecastStatus, error } = useSelector(selectForecast5);
  
  useEffect(() => {
    const fetchData = () => {
      if (location.status === "succeeded" && location.data) {
        const { lat, lon } = location.data; // Extracting latitude and longitude from location data
        dispatch(setForecast5Async({ lat, lon })); // Dispatching an async action to fetch forecast data
      }
    };

    fetchData(); // Invoking fetchData when the location changes
  }, [dispatch, location.data]); // Dependencies for the useEffect hook

  const renderContent = () => {
    switch (forecastStatus) {
      case "loading":
        return <div className={styles.loader}></div>;
      case "succeeded":
        return <>
        <WeekChart data={forecastData!}/>
        <WeekList sortedList={forecastListSorted!}/>
        </>;
      case "failed":
        return <p>{error}</p>;
      default:
        return null;
    }
  };
  return <>{renderContent()}</>; // Rendering the content based on forecastStatus
};
