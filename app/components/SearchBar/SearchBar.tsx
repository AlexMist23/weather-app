"use client";
import Image from "next/image";
import { useState, useCallback, useRef, useEffect } from "react";
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
  const searchBarRef = useRef<HTMLDivElement | null>(null);
  const ulRef = useRef<HTMLUListElement | null>(null);

  const [cityInput, setCityInput] = useState("");
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);

  const { list: locationList } = useSelector(selectLocationList);

  const clearLocationList = useCallback(() => {
    if (locationList) {
      dispatch(locationSlice.actions.clearLocationList());
      setSelectedPosition(null)
    }
  }, [dispatch, locationList]);

  const searchHandler = useCallback(() => {
    dispatch(setLocationListAsync(cityInput));
  }, [dispatch, cityInput]);

  const handleLiClick = useCallback(
    (location: location) => {
      dispatch(locationSlice.actions.setLocation(location));
      clearLocationList();
      setCityInput("");
    },
    [dispatch, clearLocationList]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLUListElement>) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedPosition((prev) => {
          if (prev === null) return 0;
          if (e.key === "ArrowUp") return Math.max(prev - 1, 0);
          return Math.min(prev + 1, locationList.length - 1);
        });
      } else if (e.key === "Enter" && selectedPosition !== null) {
        handleLiClick(locationList[selectedPosition]);
      }
    },
    [locationList, selectedPosition, handleLiClick]
  );

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        clearLocationList();
      }
    },
    [clearLocationList]
  );

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        dispatch(setLocationListAsync(cityInput)).then((action) => {
          if (setLocationListAsync.fulfilled.match(action)) {
            if (ulRef.current) {
              ulRef.current.focus();
              setSelectedPosition(0);
            }
          }
        });
      }
    },
    [dispatch, cityInput]
  );

  useEffect(() => {
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick]);

  return (
    <div className={styles.searchBar} ref={searchBarRef}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search city"
          name="cityInput"
          value={cityInput}
          onKeyDown={handleKeyPress}
          onChange={(e) => {
            setCityInput(e.target.value);
          }}
        />
        <button className={styles.button} onClick={searchHandler}>
          <Image
            src={"./static/images/search-icon.svg"}
            height={100}
            width={100}
            alt="search icon"
          />
        </button>
      </div>
      <div className={styles.ulContainer}>
        {locationList?.length > 0 && (
          <ul
            className={styles.ul}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            ref={ulRef}
          >
            {locationList?.map((location: location, index: number) => (
              <li
                className={`${styles.li} ${
                  index === selectedPosition ? styles.selected : ""
                }`}
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
