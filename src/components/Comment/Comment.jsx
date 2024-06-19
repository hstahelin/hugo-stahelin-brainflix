import "./Comment.scss";
import DeleteIcon from "../../assets/icons/delete.svg";
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
          <div className="comment__body">
            <p className="comment__text body-copy">{comment.comment}</p>
            <img
              src={DeleteIcon}
              alt="Trash can - Delete comment"
              className="comment__delete"
            />
          </div>
        </div>
      </div>
      <hr className="comment__divider" />
    </>
  );
}

export default Comment;
