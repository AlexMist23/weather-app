"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import styles from "./location.module.css";
import { setLocationAsync, useDispatch } from "@/lib/redux";

export const LocationInput = () => {
  const dispatch = useDispatch();
  const [cityInput, setCityInput] = useState('');
  const clickHandler = () => {
    console.log(cityInput);
    dispatch(setLocationAsync(cityInput));
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
