import styles from "./Dropwdown.module.css";
import sort from "../public/sort.svg";
import Image from "next/image";
import { useRef } from "react";

interface Props {
  setOrderBy: (value: string) => void;
}

export default function Dropdown({ setOrderBy }: Props) {


  return (
    <div className={styles["Dropdown-wrapper"]}>
      <select
        className={styles["Dropdown-select"]}
        onChange={(e) => setOrderBy(e.target.value)}
      >
        <option value="recent" className={styles["Dropdown-option"]}>
          최신 순
        </option>
        <option value="like" className={styles["Dropdown-option"]}>
          좋아요 순
        </option>
      </select>
    </div>
  );
}
