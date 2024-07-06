import styles from "./Dropwdown.module.css";
import arrowDown from "../public/arrow_down.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "../lib/axios";
import { getArticles } from "../lib/api";
import { pages } from "next/dist/build/templates/app-page";

interface DropdownProps {
  pageSize: number;
  orderBy: string;
}

const PCTABLET_List = 5;
const MOBILE_List = 3;

export default function Dropdown() {
  const [orderBy, setOrderBy] = useState("recent");
  const [articleList, setArticleList] = useState<any>([]);
  const [pageSize, setPageSize] = useState<number>(PCTABLET_List);

  async function getDropdown({ pageSize, orderBy }: DropdownProps) {
    try {
      const response = await getArticles({ pageSize, orderBy });
      setArticleList(response);
    } catch (error) {
      console.log(error);
    }
  }

  const changePageSize = () => {
    if (window.innerWidth >= 768) {
      setPageSize(PCTABLET_List);
      return;
    }
    if (window.innerWidth >= 375 && window.innerWidth <= 767) {
      setPageSize(MOBILE_List);
      return;
    }
  };

  useEffect(() => {
    getDropdown({ pageSize, orderBy });
  }, [pageSize, orderBy]);

  useEffect(() => {
    window.addEventListener("resize", changePageSize);
    return () => window.removeEventListener("resize", changePageSize);
  }, []);

  return (
    <>
      <div className={styles["Dropdown-wrapper"]}>
        <select className={styles["Dropdown-select"]}
          onChange={(e) => {
            setOrderBy(e.target.value);
          }}
        >
          <option value="recent" className={styles["Dropdown-option"]}>
            최신 순
          </option>
          <option value="like" className={styles["Dropdown-option"]}>
            좋아요 순
          </option>
        </select>
      </div>
    </>
  );
}
