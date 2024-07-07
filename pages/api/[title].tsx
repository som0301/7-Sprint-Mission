import { useRouter } from "next/router";
import axios from "../../lib/axios";
import { useEffect, useState } from "react";

export default function List() {
  const [article, setArticle] = useState([]);
  const router = useRouter();
  const  {title}  = router.query;

  async function getProduct({ keyword }: { keyword: string }) {
    try {
      const res = await axios.get(`/articles?keyword=${keyword}`);
      const nextArticle = res.data.results ?? [];
      setArticle(nextArticle);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  }

  useEffect(() => {
    if (!title) return;
    getProduct({ keyword: title as string });
  }, [title]);
}
