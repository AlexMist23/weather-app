"use client";
import Image from "next/image";
import { useState, useCallback } from "react";
import {
  setLocationListAsync,
  locationSlice,
  useDispatch,
  useSelector,
  selectLocationList,
  type location,
  selectLocationListIsLoading,
} from "@/lib/redux";
import styles from "./searchbar.module.css";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const [cityInput, setCityInput] = useState("");
  const locationList = useSelector(selectLocationList);
  const locationListIsLoading = useSelector(selectLocationListIsLoading);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleListBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleInputBlur = useCallback(() => {
    if (!isFocused && locationList) {
      dispatch(locationSlice.actions.clearLocationList());
    }
  }, [dispatch, isFocused, locationList]);

  const SearchHandler = useCallback(() => {
    dispatch(setLocationListAsync(cityInput));
  }, [dispatch, cityInput]);

  const handleLiClick = useCallback(
    (location: location) => {
      dispatch(locationSlice.actions.setLocation(location));
      if (locationList) {
        dispatch(locationSlice.actions.clearLocationList());
      }
      setCityInput("");
    },
    [dispatch, locationList]
  );

  return (
    <div className={styles.searchBar}>
      <div className={styles.inputContainer}>
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") SearchHandler();
          }}
          className={styles.input}
          type="text"
          placeholder="Search city"
          name="cityInput"
          value={cityInput}
          onChange={(e) => {
            setCityInput(e.target.value);
          }}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <button className={styles.button} onClick={SearchHandler}>
          <Image
            src={"./static/images/search-icon.svg"}
            height={100}
            width={100}
            alt="search icon"
          />
        </button>
      </div>
      <div className={styles.ulContainer} onBlur={handleListBlur}>
        {locationListIsLoading && <div className={styles.loader} />}
        {locationList?.list.length > 0 && (
          <ul className={styles.ul}>
            {locationList?.list.map((location: location, index: number) => (
              <li
                className={styles.li}
                key={index}
                onClick={() => handleLiClick(location)}
              >
                {location.name}, {location.state}, {location.country}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
