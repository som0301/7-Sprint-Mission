import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./SearchForm.module.css";
import search from "../public/search.svg";
import Image from "next/image";

export default function SearchForm({
  initialValue = "",
}: {
  initialValue: string;
}) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!value) {
      router.push("/board");
      return;
    }
    router.push(`/board?keyword=${value}`);
  }
  console.log(value);
  return (
    <form className={styles["search-wrapper"]} onSubmit={handleSubmit}>
      <Image src={search} alt="검색" width="24" height="24" />
      <input
        name="q"
        placeholder="검색할 상품을 입력해주세요"
        className={styles["boards-input"]}
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}
