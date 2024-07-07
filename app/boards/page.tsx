import AllArticleList from "@/components/Board/AllArticleList";
import BestArticleList from "@/components/Board/BestArticleList";

export default function MainComponent() {
  return (
    <div>
      <BestArticleList />
      <AllArticleList />
    </div>
  );
}
