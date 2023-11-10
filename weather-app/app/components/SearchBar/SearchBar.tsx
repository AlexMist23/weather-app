"use client";

import { useState } from "react";
import {
  setLocationListAsync,
  locationSlice,
  useDispatch,
  useSelector,
  selectLocationList,
  type location,
} from "@/lib/redux";
import styles from "./searchbar.module.css";

export const SearchBar = () => {
  const dispatch = useDispatch();

  const [cityInput, setCityInput] = useState("");
  const locationList = useSelector(selectLocationList);

  const SearchHandler = () => {
    dispatch(setLocationListAsync(cityInput));
  };
  const handleInputBlur = () => {
    // Close the list when input loses focus.
    LocationListResetHandler();
  };
  const handleLiClick = (location: location) => {
    dispatch(locationSlice.actions.setLocation(location));
    // Close the list when an option is selected.
    LocationListResetHandler();
    setCityInput("");
  };
  const LocationListResetHandler = () => {
    if (locationList) {
      dispatch(locationSlice.actions.clearLocationList());
    }
  };
  return (
    <div className={styles.searchBar}>
      <div className={styles.inputContainer}>
        <input
          onKeyDown={(e) => {
            if (e.key == "Enter") SearchHandler();
          }}
          className={styles.input}
          type="text"
          placeholder="Input the City"
          name="cityInput"
          value={cityInput}
          onChange={(e) => {
            setCityInput(e.target.value);
          }}
          onBlur={handleInputBlur}
        />
        <button className={styles.button} onClick={SearchHandler}>
          Search
        </button>
      </div>
      <div className={styles.ulContainer}>
        <ul className={styles.ul}>
          {locationList?.list.map((location: location) => (
            <li className={styles.li} onClick={() => handleLiClick(location)}>
              {location.name}, {location.state}, {location.country}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
