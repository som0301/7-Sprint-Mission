import "./CommentBox.css";
import DividerLine from "../../../components/DividerLine.jsx";

function CommentBox({ content, updatedAt, nickname, image }) {
  const updated = "1시간 전";

  return (
    <div className="CommentBox">
      <p>{content}</p>
      <div className="CommentBox-profile">
        <img src={image} />
        <div>
          <p className="CommentBox-profile-name">{nickname}</p>
          <p className="CommentBox-profile-updated">{updated}</p>
        </div>
      </div>
      <DividerLine />
    </div>
  );
}

export default CommentBox;
