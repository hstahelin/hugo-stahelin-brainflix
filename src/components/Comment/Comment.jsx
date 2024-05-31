import "./Comment.scss";
import { formatDates } from "../../utils/utils";

function Comment({ comment }) {
  return (
    <>
      <div className="comment">
        <div className="comment__avatar">
          <div className="comment__avatar-img"></div>
        </div>
        <div className="comment__entry">
          <div className="comment__header">
            <h3 className="comment__author subheader">{comment.name}</h3>
            <h3 className="comment__date body-copy">
              {formatDates(comment.timestamp)}
            </h3>
          </div>
          <p className="comment__text body-copy">{comment.comment}</p>
        </div>
      </div>
      <hr className="comment__divider" />
    </>
  );
}

export default Comment;
