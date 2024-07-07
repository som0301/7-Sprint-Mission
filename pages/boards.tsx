import Header from "../components/Header";
import search from "../public/search.svg";
import styles from "../styles/boards.module.css";
import BestListForm from "../components/BestListForm";
import ListForm from "../components/ListForm";
import Dropdown from "../components/Dropdown";
import Image from "next/image";
import { useState,useEffect } from "react";

const PCTABLET_List = 5;
const MOBILE_List = 3;

export default function Boards() {
  const [pageSize, setPageSize] = useState(PCTABLET_List);
  const [orderBy, setOrderBy] = useState("recent");

  const changePageSize = () => {
    if (window.innerWidth >= 768) {
      setPageSize(PCTABLET_List);
      console.log(PCTABLET_List);
      return;
    }
    if (window.innerWidth >= 375 && window.innerWidth <= 767) {
      setPageSize(MOBILE_List);
      return;
    }
  };

  useEffect(() => {
    changePageSize();
    window.addEventListener("resize", changePageSize);
    return () => window.removeEventListener("resize", changePageSize);
  }, []);

  return (
    <>
      <Header />
      <div className={styles["section-wrapper"]}>
        <h2 className={styles["boards-best-list-h2"]}>베스트 게시글</h2>
        <section className={styles["boards-best-list"]}>
          <BestListForm />
        </section>

        <section className={styles["boards-list"]}>
          <div className={styles["list-wrapper-title"]}>
            <h2 className={styles["boards-list-h2"]}>게시글</h2>
            <button type="button" className={styles.boardsBtn}>
              글쓰기
            </button>
          </div>

          <div className={styles["list-wrapper-input"]}>
            <div className={styles["search-wrapper"]}>
              <Image src={search} alt="검색" width="24" height="24" />
              <input
                placeholder="검색할 상품을 입력해주세요"
                className={styles["boards-input"]}
              />
            </div>
            <Dropdown setOrderBy={setOrderBy} />
          </div>
          <ListForm pageSize={pageSize} orderBy={orderBy} />
        </section>
      </div>
    </>
  );
}
