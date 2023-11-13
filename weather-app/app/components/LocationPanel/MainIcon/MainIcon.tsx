"use client";

/* Core */
import Image from "next/image";

/* Instruments */
import styles from "./mainicon.module.css";

export const MainIcon: React.FC<MainIconProps> = ({ iconName }) => {
  const iconsPath = "./wheather-icons/";
  return (
    <div className={styles.div}>
      {iconName && (
        <img
          className={styles.img}
          src={iconsPath + iconName + ".svg"}
          alt=""
        />
      )}
    </div>
  );
};

export interface MainIconProps {
  iconName: string | undefined;
}
