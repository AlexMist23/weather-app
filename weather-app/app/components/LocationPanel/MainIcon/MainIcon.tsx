"use client";

/* Core */
import Image from "next/image";

/* Instruments */
import styles from "./mainicon.module.css";

export const MainIcon: React.FC<MainIconProps> = ({ iconName }) => {
  const iconsPath = "./wheather-icons/";
  return (
    <div className={styles.div}>
      <Image
        className={styles.img}
        src={iconsPath + iconName + ".svg"}
        width={200}
        height={200}
        alt=""
      />
    </div>
  );
};

export interface MainIconProps {
  iconName: string | undefined;
}
