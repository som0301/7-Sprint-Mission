import Header from "../../components/Header";
import styles from "../../styles/board.module.css";
import BestListForm from "../../components/BestListForm";
import ListForm from "../../components/ListForm";
import Dropdown from "../../components/Dropdown";
import { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import { useRouter } from "next/router";
import Link from "next/link";

const PCTABLET_List = 5;
const MOBILE_List = 3;

export default function Boards() {
  const [pageSize, setPageSize] = useState(PCTABLET_List);
  const [orderBy, setOrderBy] = useState("recent");
  const router = useRouter();
  const { keyword } = router.query;

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
    changePageSize();
    window.addEventListener("resize", changePageSize);
    return () => window.removeEventListener("resize", changePageSize);
  }, []);

  const searchKeyword = Array.isArray(keyword) ? keyword[0] : keyword || "";

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
            <Link href="/addboard">
            <button type="button" className={styles.boardsBtn}>
              글쓰기
            </button>
            </Link>
          </div>

          <div className={styles["list-wrapper-input"]}>
            <SearchForm initialValue={(keyword as string) || ""} />
            <Dropdown setOrderBy={setOrderBy} />
          </div>
          <ListForm pageSize={pageSize} orderBy={orderBy} keyword={searchKeyword}/>
        </section>
      </div>
    </>
  );
}
