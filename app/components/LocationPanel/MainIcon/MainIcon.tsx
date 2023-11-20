"use client";

/* Instruments */
import styles from "./mainicon.module.css";

export const MainIcon: React.FC<MainIconProps> = ({ iconName, isLoading }) => {
  const iconsPath = "./static/images/";
  return (
    <div className={styles.div}>
      {isLoading ? (
        <div className={styles.loader} />
      ) : (
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
  isLoading: boolean;
}
