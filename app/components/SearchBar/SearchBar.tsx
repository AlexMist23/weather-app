"use client";

/* Core */
import { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";

/* Instruments */
import { useDispatch, useSelector} from "@/lib/redux";
import {
  setLocationListAsync,
  locationSlice,
  locationListSlice,
  selectLocationList,
} from "@/lib/redux";
import type { locationData } from "@/lib/redux";

/* CSS */
import styles from "./searchbar.module.css";

export const SearchBar = () => {
  // State and refs
  const dispatch = useDispatch();
  const searchBarRef = useRef<HTMLDivElement | null>(null);
  const ulRef = useRef<HTMLUListElement | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);
  const [cityInput, setCityInput] = useState("");

  // Select location list data
  const locationList = useSelector(selectLocationList);

  // Clear location list
  const clearLocationList = useCallback(() => {
    if (locationList.data.length > 0) {
      dispatch(locationListSlice.actions.resetState());
      setSelectedPosition(null);
    }
  }, [dispatch, locationList]);

  // Search handler
  const searchHandler = useCallback(() => {
    dispatch(setLocationListAsync(cityInput));
  }, [dispatch, cityInput]);

  // Handle click on location list item
  const handleLiClick = useCallback(
    (location: locationData) => {
      dispatch(locationSlice.actions.setLocation(location));
      clearLocationList();
      setCityInput("");
    },
    [dispatch, clearLocationList]
  );

  // Handle key down events
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLUListElement>) => {
      // Handle arrow up/down and enter keys
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedPosition((prev) => {
          if (prev === null) return 0;
          if (e.key === "ArrowUp") return Math.max(prev - 1, 0);
          return Math.min(prev + 1, locationList.data.length - 1);
        });
      } else if (e.key === "Enter" && selectedPosition !== null) {
        handleLiClick(locationList.data[selectedPosition]);
      }
    },
    [locationList, selectedPosition, handleLiClick]
  );

  // Handle click outside search bar to clear location list
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

  // Handle key press events
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

  // Add event listener for click outside search bar
  useEffect(() => {
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick]);

  // Render
  return (
    <div className={styles.searchBar} ref={searchBarRef}>
      {/* Search input and button */}
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
            src={"/static/images/search-icon.svg"}
            height={100}
            width={100}
            alt="search icon"
          />
        </button>
      </div>

      {/* Location list */}
      <div className={styles.ulContainer}>
        {locationList.status === "loading" ? (
          <div className={styles.loader} />
        ) : (
          <>
            {locationList.data?.length > 0 && (
              <ul
                className={styles.ul}
                onKeyDown={handleKeyDown}
                tabIndex={-1}
                ref={ulRef}
              >
                {locationList?.data.map(
                  (location: locationData, index: number) => (
                    <li
                      className={`${styles.li} ${
                        index === selectedPosition ? styles.selected : ""
                      }`}
                      key={index}
                      onClick={() => handleLiClick(location)}
                    >
                      {location.name}, {location.state}, {location.country}
                    </li>
                  )
                )}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
};
