import "./Comment.scss";

function Comment({ comment }) {
  const date = new Date(comment.timestamp);

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
              {date.toLocaleDateString("en-US")}
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
