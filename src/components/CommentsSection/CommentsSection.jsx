import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import "./CommentsSection.scss";

function CommentsSection({ video, submitComment }) {
  if (video.comments) {
    return (
      <section className="comments-section">
        <h2 className="comments-section__count subheader">
          {video.comments.length} Comments
        </h2>
        <CommentForm submitComment={submitComment} />
        <div className="comments-list">
          {video.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </section>
    );
  }
}

export default CommentsSection;
