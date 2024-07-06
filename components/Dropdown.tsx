import styles from "./Dropwdown.module.css";
import arrowDown from "../public/arrow_down.svg";
import Image from "next/image";
import { useState } from "react";

export default function Dropdown() {
  const [isLike, setIsLike] = useState();

  return (
    <>
      <div className={styles["Dropdown-wrapper"]}>
        <span className={styles["Dropwdown-span"]}>최신순</span>
        <button className={styles.DropdownBtn}>
          <Image src={arrowDown} alt="화살표" width="24" height="24" />
        </button>
      </div>
    </>
  );
}
