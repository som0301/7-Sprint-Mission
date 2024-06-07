import Comment from "./Comment";

const CommentsSection = () => {
  const comments = [
    { user: "임시값 사용자1", text: "혹시 사용기간이 어떻게 되나요?" },
    { user: "임시값 사용자2", text: "배송이 어떻게 되는지 궁금해요!" },
    { user: "임시값 사용자3", text: "살 때 같이 사면 안될까요?" },
  ];

  return (
    <div className="CommentsSection">
      <form>
        <h3>문의하기</h3>
        <textarea
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.

"
        />
        <button>등록</button>
      </form>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsSection;
