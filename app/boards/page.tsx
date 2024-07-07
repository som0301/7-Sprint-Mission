import PrintAllArticles from "@/components/Board/PrintAllArticles";
import PrintBestArticles from "@/components/Board/PrintBestArticles";

export default function MainComponent() {
  return (
    <div>
      <PrintBestArticles />
      <PrintAllArticles />
    </div>
  );
}
