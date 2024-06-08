import "./CommentForm.css";
import iconFavorite from "../../../assets/images/icon_favorite.svg";
import Button from "../../../components/Button";

function CommentForm({}) {
  const placeHolder =
    "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

  return (
    <form className="CommentForm">
      <h2>문의하기</h2>
      <textarea placeholder={placeHolder}></textarea>
      <Button className="button small">등록</Button>
    </form>
  );
}

export default CommentForm;
