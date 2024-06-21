import "./CommentForm.scss";
import UserImage from "../../assets/images/Mohan-muruge.jpg";
import { useState } from "react";

function CommentForm({ submitComment }) {
  const commentInitialValue = {
    name: "Mohan Muruge",
    comment: "",
  };
  const [formData, setFormData] = useState(commentInitialValue);
  const [isValid, setIsValid] = useState(true);

  function handleChange(event) {
    setFormData({ ...formData, comment: event.target.value });
  }

  function handleSubmitComment(event) {
    event.preventDefault();
    if (!formData.comment) {
      setIsValid(false);
    } else {
      submitComment(formData);
      setIsValid(true);
      setFormData(commentInitialValue);
    }
  }
  return (
    <>
      <div className="comments">
        <div className="comments__avatar">
          <img
            className="comments__avatar-img"
            src={UserImage}
            alt="User avatar"
          />
        </div>
        <form
          id="comments-form"
          className="comments__form"
          onSubmit={handleSubmitComment}
        >
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
              className={`comments__input ${
                isValid ? "" : "comments__input--error"
              }`}
              placeholder="Add a new comment"
              value={formData.comment}
              onChange={handleChange}
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
