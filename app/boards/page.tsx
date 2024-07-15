import AllArticleList from "@/components/Board/AllArticleList";
import BestArticleList from "@/components/Board/BestArticleList";

export default function MainComponent() {
  return (
    <div className='sm:px-6 px-4'>
      <BestArticleList />
      <AllArticleList />
    </div>
  );
}
