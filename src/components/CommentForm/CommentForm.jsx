import "./CommentForm.scss";
import UserImage from "../../assets/images/Mohan-muruge.jpg";

function CommentForm() {
  return (
    <>
      <div className="comments">
        <div className="comments__avatar">
          <img className="comments__avatar-img" src={UserImage} alt="" />
        </div>
        <form id="comments-form" className="comments__form" action="./">
          <label
            htmlFor="comments-form-comment"
            className="comments__label labels-and-buttons"
          >
            JOIN THE CONVERSATION
          </label>
          <div className="comments__input-section">
            <textarea
              name="comment"
              id="comments-form-comment"
              className="comments__input"
              placeholder="Add a new comment"
            ></textarea>
            <button className="comments__button labels-and-buttons">
              COMMENT
            </button>
          </div>
        </form>
      </div>
      <hr className="comments__divider" />
    </>
  );
}

export default CommentForm;
