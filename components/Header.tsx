import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import userBtn from "../public/userBtn.svg";
import styles from "./Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router=useRouter();
  return (
    <>
      <div className={styles.header}>
        <div className={styles["header-wrapper"]}>
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width="153"
              height="51"
              className={styles["header-logo"]}
            />
            <h1 className={styles["header-logo-mobile"]}>판다마켓 </h1>
          </Link>
          <div className={styles["nav-wrapper"]}>
            <Link href="/boards">
              <h2 className={`${styles["nav-wrapper-boards"]} ${router.pathname==='/boards'? styles.active : ''}`}>자유게시판</h2>
            </Link>
            <Link href="/">
              <h2 className={styles["nav-wrapper-items"]}>중고마켓</h2>
            </Link>
          </div>
        </div>
        <Link href="/">
          <Image src={userBtn} alt="userButton" width="40" height="40" />
        </Link>
      </div>
      <div className={styles.line}></div>
    </>
  );
}
