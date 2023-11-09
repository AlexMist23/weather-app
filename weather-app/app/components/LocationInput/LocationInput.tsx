"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import styles from "./locationInput.module.css";
import {
  setLocationListAsync,
  locationSlice,
  useDispatch,
  useSelector,
  selectLocationList,
} from "@/lib/redux";

export const LocationInput = () => {
  const dispatch = useDispatch();
  const [cityInput, setCityInput] = useState("");
  const locationList = useSelector(selectLocationList);
  const SearchClickHandler = () => {
    console.log(cityInput);
    dispatch(setLocationListAsync(cityInput));
  };

  return (
    <div className={styles.locationInput}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Input the City"
          name="cityInput"
          value={cityInput}
          onChange={(e) => {
            setCityInput(e.target.value);
          }}
        />
        <button className={styles.button} onClick={SearchClickHandler}>
          Search
        </button>
      </div>
      <div className={styles.ulContainer}>
        <ul className={styles.ul}>
          {locationList.map((location) => (
            <li
              className={styles.li}
              onClick={() =>
                dispatch(locationSlice.actions.setLocation(location))
              }
            >
              {location.name}, {location.state}, {location.country}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
