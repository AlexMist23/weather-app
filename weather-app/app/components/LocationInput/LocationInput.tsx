"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import styles from "./location.module.css";
import {
  setLocationListAsync,
  useDispatch,
  useSelector,
  selectLocationList,
} from "@/lib/redux";

export const LocationInput = () => {
  const dispatch = useDispatch();
  const [cityInput, setCityInput] = useState("");
  const locationList = useSelector(selectLocationList)
  const clickHandler = () => {
    console.log(cityInput);
    dispatch(setLocationListAsync(cityInput));
  };

  return (
    <div>
      <label>City:</label>
      <input
        type="text"
        placeholder="Ex. London"
        name="cityInput"
        value={cityInput}
        onChange={(e) => {
          setCityInput(e.target.value);
        }}
      />
      <button onClick={clickHandler}>Search</button>
    </div>
  );
};
