"use client";

/* Core */

/* Instruments */
import styles from "./mainicon.module.css";
export const MainIcon: React.FC<MainIconProps> = ({ iconName }) => {
  const iconsPath = './wheather-icons/'
  return (
    <div className={styles.div}>
      <img className={styles.img} src={iconsPath + iconName + '.svg'}></img>
    </div>
  );
};

export interface MainIconProps {
  iconName: string | undefined;
}
