"use client";

import { useEffect } from "react";

import { useSelector, useDispatch } from "@/lib/redux";
import {
  selectLocation,
  selectForecast5,
  setForecast5Async,
} from "@/lib/redux";

import { WeekChart } from "./WeekChart/WeekChart";

import styles from "./forecast5.module.css";

export const Forecast5 = () => {
  const dispatch = useDispatch(); // Initializing useDispatch for Redux actions
  const location = useSelector(selectLocation); // Accessing location state
  const { data: forecastData, status: forecastStatus, error } = useSelector(
    selectForecast5
  ); // Destructuring forecast data, status, and error from Redux state

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
        return <div className={styles.loader}></div>; // Rendering a loader if forecast data is loading
      case "succeeded":
        return <WeekChart />; // Rendering the WeekChart component when forecast data is successfully fetched
      case "failed":
        return <p>{error}</p>; // Displaying an error message if fetching forecast data fails
      default:
        return null;
    }
  };

  return <>{renderContent()}</>; // Rendering the content based on forecastStatus
};
