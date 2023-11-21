"use client";

/* Instruments */
import styles from "./mainicon.module.css";

export const MainIcon: React.FC<MainIconProps> = ({
  iconName,
  isLoading,
  temp,
}) => {
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
      {temp && <p>{temp}</p>}
    </div>
  );
};

export interface MainIconProps {
  iconName: string | undefined;
  isLoading: boolean;
  temp: number | undefined;
}
